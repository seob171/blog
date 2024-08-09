import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from "rehype-pretty-code";



/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["next-mdx-remote"],
    compiler: {
        removeConsole:
            process.env.NODE_ENV === "production"
                ? { exclude: ["warn", "error"] }
                : false,
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "**",
            },
            {
                protocol: "https",
                hostname: "**",
            },
        ],
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
})

export default withMDX(nextConfig)