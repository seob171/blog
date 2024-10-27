import createMDX from '@next/mdx';
import withVercelToolbar from '@vercel/toolbar/plugins/next';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['next-mdx-remote'],
  // compiler: {
  //     removeConsole:
  //         process.env.NODE_ENV === "production"
  //             ? { exclude: ["warn", "error"] }
  //             : false,
  // },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

/** @type {import('rehype-pretty-code').Options} */
const options = {
  keepBackground: false,
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
  },
});

export default withMDX(withVercelToolbar(nextConfig));
