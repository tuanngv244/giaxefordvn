import { LayoutProps } from "@/models";
import React, { FC } from "react";

const EmptyLayout = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};

export default EmptyLayout;
