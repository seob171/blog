import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getPostList } from "@/utils/getPostList";

const PostList = ({ data }: { data: ReturnType<typeof getPostList> }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[60px]">Year</TableHead>
          <TableHead className="w-[60px]">Month</TableHead>
          <TableHead>Title</TableHead>
          <TableHead className="w-[80px] text-right">Views</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(({ year, month, title }) => (
          <TableRow key={`${year}-${month}-${title}`}>
            <TableCell className="font-medium">{year}</TableCell>
            <TableCell>{month}</TableCell>
            <TableCell>{title}</TableCell>
            <TableCell className="text-right">{0}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PostList;
