import fs from "fs";
import path from "path";

import matter from "gray-matter";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

export type MdxData = {
  data: Metadata;
  slug: string;
  content: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return matter(rawContent);
}

function getMDXData(dir: string): MdxData[] {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file): MdxData => {
    const { data, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    return {
      data: data as Metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "post"));
}
