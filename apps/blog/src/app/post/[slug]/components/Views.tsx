"use client";

import React, { useEffect, useRef } from "react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";

import { createPost, getPost, updatePost } from "@/service/post";
import { PrismaModels } from "@/types/prisma";

const Views = () => {
  const queryClient = useQueryClient();

  const isViewUpdated = useRef(false);
  const { slug } = useParams<{ slug: string }>();

  const postQueryKey = ["post", decodeURI(slug)];

  const { data: dbPost, isFetched } = useQuery({
    queryKey: postQueryKey,
    queryFn: () => getPost({ slug }),
    enabled: Boolean(slug),
  });

  const { mutate: createMutate } = useMutation({
    mutationFn: ({ slug }: PrismaModels["posts"]) => createPost({ slug }),
    onMutate: async ({ slug }) => {
      await queryClient.cancelQueries({ queryKey: postQueryKey });

      const prevDbPost =
        queryClient.getQueryData<PrismaModels["posts"]>(postQueryKey);

      queryClient.setQueryData<PrismaModels["posts"]>(postQueryKey, () => {
        return { slug, views: 1 };
      });
      return { prevDbPost };
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData(postQueryKey, context?.prevDbPost);
    },
  });
  const { mutate: updateMutate } = useMutation({
    mutationFn: (args: PrismaModels["posts"]) => updatePost(args),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: postQueryKey });

      const prevDbPost =
        queryClient.getQueryData<PrismaModels["posts"]>(postQueryKey);

      console.log({ prevDbPost });

      queryClient.setQueryData<PrismaModels["posts"]>(postQueryKey, (post) => {
        console.log({ post });
        if (!post) return undefined;

        console.log({ ...post, views: post.views + 1 });

        return { ...post, views: post.views + 1 };
      });
      return { prevDbPost };
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData(postQueryKey, context?.prevDbPost);
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: postQueryKey,
      });
    },
  });

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!isFetched) return;
    if (isViewUpdated.current) return;

    if (!dbPost) {
      createMutate({ slug, views: 1 });
    } else {
      updateMutate({ slug, views: dbPost.views + 1 });
    }
    isViewUpdated.current = true;
  }, [createMutate, dbPost, isFetched, slug, updateMutate]);

  return <span>{dbPost?.views ?? 0} views</span>;
};

export default Views;
