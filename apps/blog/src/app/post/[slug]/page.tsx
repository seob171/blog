import React from "react";

import { notFound } from "next/navigation";

import Post from "@/app/post/[slug]/components/Post";
import { getBlogPosts } from "@/utils/getBlogPosts";
import type { Metadata } from "next";
import { DEFAULT_METADATA } from "@/app/constants/metadata";
import { PATH_NAME } from "@/app/constants/router";

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPosts().find(
    (post) => post.slug === decodeURI(params.slug),
  );

  if (!post) return DEFAULT_METADATA;

  const {
    data: { title, summary, image },
  } = post;

  return {
    title: title,
    description: summary,
    openGraph: {
      title: title,
      description: summary,
      url: `${PATH_NAME.post}/${post.slug}`,
      siteName: title,
      ...(image && {
        images: {
          url: `${image}`,
          alt: `${title}`,
        },
      }),
    },
    alternates: {
      canonical: `${PATH_NAME.post}/${post.slug}`,
    },
  };
}

const Page = ({ params }: Props) => {
  const post = getBlogPosts().find(
    (post) => post.slug === decodeURI(params.slug),
  );

  if (!post) return notFound();

  return (
    <main className="flex justify-center">
      <section className="max-w-screen-md w-full">
        <Post post={post} />
      </section>
    </main>
  );
};

export default Page;
