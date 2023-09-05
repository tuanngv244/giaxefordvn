import EmptyLayout from "@/components/layout/empty";
import { AppRootProps } from "@/models";
import "@/styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tippy.js/dist/tippy.css";

const progress = new ProgressBar({
  size: 2,
  color: "#3b82f6",
  className: "bar-of-progress",
  delay: 100,
});

if (typeof window !== "undefined") {
  progress.start();
  progress.finish();
}

Router.events.on("routeChangeStart", () => progress.start());
Router.events.on("routeChangeComplete", () => progress.finish());
Router.events.on("routeChangeError", () => progress.finish());

export default function App({ Component, pageProps }: AppRootProps) {
  const RenderLayout = Component.Layout ?? EmptyLayout;
  return (
    <React.Fragment>
      <RenderLayout>
        <Component {...pageProps} />
      </RenderLayout>
      <ToastContainer />
    </React.Fragment>
  );
}
