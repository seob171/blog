import React from "react";

import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { DEFAULT_META } from "@/app/constants/metadata";
import { PATH_NAME } from "@/app/constants/router";
import Post from "@/app/post/[slug]/components/Post";
import { getBlogPosts } from "@/utils/getBlogPosts";

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
