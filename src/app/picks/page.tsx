import React from "react";
import TopBar from "@/components/nav/TopBar";
import Back from "@/shared/Back";

const Page = () => {
  return (
    <>
      <TopBar leftRender={<Back />} />

      <h3>Picks</h3>
    </>
  );
};

export default Page;
