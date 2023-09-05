import { LayoutProps } from "@/models";
import React, { FC } from "react";
import Link from "next/link";
import { PATHNAME } from "@/configs";

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="p-[20px] flex flex-col gap-[20px]">
      <Link href={PATHNAME.HOME}>Home</Link>
      <Link href={PATHNAME.POSTS}>Posts</Link>
      <div className="px-[50px]">{children}</div>
    </div>
  );
};

export default MainLayout;
