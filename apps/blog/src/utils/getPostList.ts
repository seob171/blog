import fs from "fs";
import path from "path";

import dayjs from "dayjs";
import matter from "gray-matter";

const ROOT_DIRECTORY_NAME = "post";

export const getPostList = () => {
  const getFileNameList = (path: string) => {
    return fs.readdirSync(path);
  };

  const yearList = getFileNameList(
    path.join(process.cwd(), ROOT_DIRECTORY_NAME),
  );

  return yearList.flatMap((year) => {
    const pathWithYear = [ROOT_DIRECTORY_NAME, year].join("/");
    const monthList = getFileNameList(pathWithYear);
    return monthList.flatMap((month) => {
      const pathWithYearAndMonth = [pathWithYear, month].join("/");
      const fileNameList = getFileNameList(pathWithYearAndMonth);

      return fileNameList.flatMap((fileName) => {
        const title = fileName.replace(/\.mdx$/, "");
        const fullPath = [pathWithYearAndMonth, fileName].join("/");
        const fileContent = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContent);
        const { description, date } = matterResult.data;
        return {
          year: Number(year),
          month: Number(month),
          title,
          description: description ?? "",
          content: matterResult.content,
          date: date ?? dayjs().format("YYYY.MM.DD"),
        };
      });
    });
  });
};
