import React from "react";
import TopBar from "@/components/nav/TopBar";
import Back from "@/shared/Back";
import SignInForm from "@/app/auth/sign-in/_components/SignInForm";

const Page = () => {
  return (
    <>
      <TopBar leftRender={<Back />} />
      <section className={"flex items-center"}>
        <section className={"flex flex-col items-center justify-center w-full"}>
          <SignInForm />
        </section>
      </section>
    </>
  );
};

export default Page;
