import { LayoutProps } from "@/models";
import React, { FC } from "react";
import Link from "next/link";
import { PATHNAME } from "@/configs";
import AuthContainer from "./AuthContainer";

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <AuthContainer>
      <div className="p-[20px] flex flex-col gap-[20px]">
        <Link href={PATHNAME.HOME}>Home</Link>
        <Link href={PATHNAME.POSTS}>Posts</Link>
        <div className="px-[50px]">{children}</div>
      </div>
    </AuthContainer>
  );
};

export default MainLayout;
