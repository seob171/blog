import fs from "fs";
import path from "path";

import dayjs from "dayjs";
import matter from "gray-matter";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  tags: string[];
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
    const { data: frontMatter, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    const data = {
      title: frontMatter?.title ?? "",
      publishedAt: frontMatter?.publishedAt ?? dayjs().format("YYYY-MM-DD"),
      summary: frontMatter?.summary ?? "",
      image: frontMatter?.image,
      tags: frontMatter?.tags ?? [],
    } as Metadata;

    return {
      data,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "post"));
}
