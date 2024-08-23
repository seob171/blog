import React, { ComponentProps } from "react";

import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import Anchor from "@/components/mdx/Anchor";
import BlockQuote from "@/components/mdx/BlockQuote";
import Code from "@/components/mdx/Code";
import Heading from "@/components/mdx/Heading";
import Image from "@/components/mdx/Image";
import Youtube from "@/components/mdx/Youtube";

const mdxComponents = {
  a: Anchor,
  h1: (props) => <Heading level={1} {...props} />,
  h2: (props) => <Heading level={2} {...props} />,
  h3: (props) => <Heading level={3} {...props} />,
  h4: (props) => <Heading level={4} {...props} />,
  h5: (props) => <Heading level={5} {...props} />,
  h6: (props) => <Heading level={6} {...props} />,
  blockquote: BlockQuote,
  Image,
  code: Code,
  Youtube,
} as ComponentProps<typeof MDXRemote>["components"];

const Mdx = ({ source, components }: ComponentProps<typeof MDXRemote>) => {
  return (
    <section className="prose dark:prose-invert [&_a]:no-underline pb-10 !max-w-none">
      <MDXRemote
        source={source}
        components={{ ...components, ...mdxComponents }}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [[rehypePrettyCode, {}], rehypeSlug],
          },
        }}
      />
    </section>
  );
};

export default Mdx;
