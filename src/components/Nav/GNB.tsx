import React from "react";
import Logo from "@/shared/Logo";
import LoginDialog from "@/features/Auth/LoginDialog";

const GNB = () => {
  return (
    <nav
      className={"flex items-center justify-between gap-2 p-4 bg-background"}
    >
      <Logo />
      <div className={"flex items-center gap-1"}>
        <LoginDialog />
        {/*<Dropdown />*/}
      </div>
    </nav>
  );
};

export default GNB;
