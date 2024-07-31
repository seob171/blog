import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PATH_NAME } from "@/constants/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center w-full h-full m-auto">
      <div className="flex flex-col items-center">
        <ExclamationTriangleIcon className="size-24 text-destructive" />
        <p className="text-xl mb-8">페이지를 찾을 수 없어요.</p>
        <Link href={PATH_NAME.home}>
          <Button>홈으로 가기</Button>
        </Link>
      </div>
    </div>
  );
}
