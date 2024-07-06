import Link from "next/link";
import Warning from "@/components/icon/Warning";
import { PATH_NAME } from "@/constants/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className={"flex items-center justify-center w-full h-full m-auto"}>
      <div className={"flex flex-col items-center"}>
        <Warning className={"size-24 text-destructive"} strokeWidth={1} />
        <p className={"text-xl mb-8"}>찾을 수 없는 페이지입니다.</p>
        <Link href={PATH_NAME.home}>
          <Button>홈으로 돌아가기</Button>
        </Link>
      </div>
    </div>
  );
}