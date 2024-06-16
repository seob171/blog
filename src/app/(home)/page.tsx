import React, { Suspense } from "react";
import Airport from "@/app/(home)/_components/Airport";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col max-w-screen-sm mx-auto bg-slate-400">
      <Suspense fallback={<div>hello</div>}>
        <Airport />
      </Suspense>
    </main>
  );
}
