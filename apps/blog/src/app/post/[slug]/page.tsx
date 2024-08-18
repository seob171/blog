import React from "react";

import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { DEFAULT_META } from "@/app/constants/metadata";
import { PATH_NAME } from "@/app/constants/router";
import Post from "@/app/post/[slug]/components/Post";
import { getPost } from "@/service/post";
import { getBlogPosts } from "@/utils/getBlogPosts";
import { getQueryClient } from "@/utils/getQueryClient";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    params: { slug: post.slug },
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const post = getBlogPosts().find(
    (post) => post.slug === decodeURI(params.slug),
  );

  if (!post) return DEFAULT_META;

  const {
    data: { title, summary, image, tags },
  } = post;

  const previousImages = (await parent).openGraph?.images || [];
  const postImages = image
    ? [
        {
          url: `${image}`,
          alt: `${title}`,
          type: "image/png",
          width: 1200,
          height: 630,
        },
      ]
    : [];

  return {
    title,
    description: summary,
    keywords: tags,
    openGraph: {
      title,
      description: summary,
      url: `${PATH_NAME.post}/${post.slug}`,
      siteName: title,
      images: [...postImages, ...previousImages],
    },
    alternates: {
      canonical: `${PATH_NAME.post}/${post.slug}`,
    },
  };
}

const Page = async ({ params }: Props) => {
  const queryClient = getQueryClient();

  const post = getBlogPosts().find(
    (post) => post.slug === decodeURI(params.slug),
  );

  if (!post) return notFound();

  await queryClient.prefetchQuery({
    queryKey: ["post", post.slug],
    queryFn: () => getPost({ slug: post.slug }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="flex justify-center">
        <section className="max-w-screen-md w-full">
          <Post post={post} />
        </section>
      </main>
    </HydrationBoundary>
  );
};

export default Page;
