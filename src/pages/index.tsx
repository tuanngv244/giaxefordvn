import MainLayout from "@/components/layout/main";
import { NextPageLayout } from "@/models";
import PageSEO from "@/seo/Seo";
import fsPromises from "fs/promises";
import { InferGetServerSidePropsType } from "next";
import path from "path";
import React from "react";

export async function getStaticProps() {
  const serviceFilePath = path.join(
    process.cwd(),
    "src/pages/api/services.json"
  );
  const serviceJsonData = await fsPromises.readFile(serviceFilePath);

  const serviceData = JSON.parse(serviceJsonData as any);

  return {
    props: {},
    revalidate: 60,
  };
}

const Home: NextPageLayout = (props: any) => {
  const textSection = `text-main relative text-uppercase text-5xl my-0  after after:absolute after:top-[50%] after:left-[20%] after:translate-y-[-50%] after:content-[''] after:w-[20rem] after:h-[0.1rem] after:bg-main before:absolute before:top-[50%] before:right-[20%] before:translate-y-[-50%] before:content-[''] before:w-[20rem] before:h-[0.1rem] before:bg-main mobile:after:opacity-0 mobile:before:opacity-0 tablet:after:opacity-100 tablet:before:opacity-100 `;

  const bannerImages = [
    {
      id: 1,
      label: "",
      image_url: "/images/banner-1.jpg",
    },
    {
      id: 2,
      label: "",
      image_url: "/images/banner-2.jpg",
    },
    {
      id: 3,
      label: "",
      image_url: "/images/banner-3.jpg",
    },
    {
      id: 4,
      label: "",
      image_url: "/images/banner-4.jpg",
    },
  ];

  return (
    <div>
      <PageSEO
        title="Trang chủ - Gia Xe Ford VN"
        description="Trang chủ giá xe Ford VN"
      />
      home page!
    </div>
  );
};

Home.Layout = MainLayout;

export default Home;
