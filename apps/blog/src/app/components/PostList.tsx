import dayjs from "dayjs";
import Link from "next/link";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MdxData } from "@/utils/getBlogPosts";

const PostList = ({ posts }: { posts: MdxData[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent cursor-default">
          <TableHead className="w-[130px]">Date</TableHead>
          <TableHead>Title</TableHead>
          {/* <TableHead className="w-[70px] text-right">조회수</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map(({ data: { title, publishedAt }, slug }) => (
          <TableRow key={`${slug}`} className="relative">
            <TableCell>{dayjs(publishedAt).format("YYYY-MM-DD")}</TableCell>
            <TableCell>{title}</TableCell>
            {/* <TableCell className="text-right">{0}</TableCell> */}
            <TableCell className="absolute top-0 left-0 w-full h-full p-0">
              <Link
                key={`${slug}`}
                href={`/post/${slug}`}
                className="block size-full"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PostList;
