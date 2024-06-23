import React from "react";
import TopBar from "@/components/nav/TopBar";
import Back from "@/shared/Back";
import Logout from "@/shared/Logout";

const Page = () => {
  return (
    <>
      <TopBar leftRender={<Back />}>
        <h2 className={"flex justify-center text-lg"}>내 프로필</h2>
      </TopBar>
      <div className={"flex px-4 py-2"}>
        <section
          className={
            "flex flex-col items-center justify-center h-96 w-full rounded-lg bg-secondary"
          }
        >
          프로필 공간
        </section>
      </div>
      <ul className={"flex flex-col w-full px-4 py-2"}>
        <li className={"flex justify-end"}>
          <Logout />
        </li>
      </ul>
    </>
  );
};

export default Page;
