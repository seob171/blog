import React, {
  AnchorHTMLAttributes,
  ComponentProps,
  HTMLAttributes,
} from "react";

import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/utils";

function A({
  children,
  href,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  // 내부 링크
  if (href?.startsWith("/")) {
    return (
      <Link
        className={cn("text-primary hover:underline", className)}
        href={href}
        {...props}
      >
        {children}
      </Link>
    );
  }

  // Heading Tag 링크
  if (href?.startsWith("#")) {
    return (
      <a className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a
      className={cn("text-primary hover:underline", className)}
      target="_blank"
      rel="noreferrer"
      href={href}
      {...props}
    >
      {children}
    </a>
  );
}

function Img({ alt, ...props }: ImageProps) {
  return <Image alt={alt} {...props} className="mx-auto rounded-md" priority />;
}

function Heading({
  level,
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}) {
  const tag = `h${level}`;
  return React.createElement(
    tag,
    props,
    <a className="flex gap-x-1" href={`#${props.id}`}>
      {children}
    </a>,
  );
}

function Code({ children, className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        "[p_&]:px-1.5 [p_&]:py-0.5 [p_&]:bg-secondary dark:[p_&]:text-white [p_&]:before:hidden [p_&]:after:hidden [p_&]:rounded",
        className,
      )}
      {...props}
    >
      {children}
    </code>
  );
}

const mdxComponents = {
  a: A,
  Image: Img,
  h1: (props) => <Heading level={1} {...props} />,
  h2: (props) => <Heading level={2} {...props} />,
  h3: (props) => <Heading level={3} {...props} />,
  h4: (props) => <Heading level={4} {...props} />,
  h5: (props) => <Heading level={5} {...props} />,
  h6: (props) => <Heading level={6} {...props} />,
  code: (props) => <Code {...props} />,
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
