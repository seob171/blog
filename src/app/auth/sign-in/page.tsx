import React from "react";
import TopBar from "@/components/nav/TopBar";
import Back from "@/shared/Back";

const Page = () => {
  return (
    <>
      <TopBar
        leftRender={
          <>
            <Back />
          </>
        }
      >
        <span className={"flex justify-center"}>로그인</span>
      </TopBar>
      <h4>sign-in</h4>
    </>
  );
};

export default Page;
