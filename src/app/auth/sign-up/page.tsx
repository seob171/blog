import React from "react";
import TopBar from "@/components/nav/TopBar";
import Back from "@/shared/Back";
import SignUpForm from "@/app/auth/sign-up/_components/SignUpForm";

const Page = () => {
  return (
    <>
      <TopBar leftRender={<Back />} />
      <section className={"flex items-center"}>
        <section className={"flex flex-col items-center justify-center w-full"}>
          <SignUpForm />
        </section>
      </section>
    </>
  );
};

export default Page;
