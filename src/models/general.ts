import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export type NextPageLayout = NextPage & {
  Layout: (props: LayoutProps) => ReactElement;
};
export type AppRootProps = AppProps & {
  Component: NextPageLayout;
};
