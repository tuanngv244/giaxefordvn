import { Header } from "@/components/Header";
import path from "path";
import fsPromises from "fs/promises";
import { InferGetServerSidePropsType, NextPage } from "next";
import { ProductCard } from "@/components/ProductCard";
import { IProduct } from "@/models/products";
import React from "react";
import { IService } from "@/models/services";
import Image from "next/image";
import Link from "next/link";
import ArrowNextIcon from "public/images/arrow-next-icon.svg";
import { Icon } from "@/components/Icon";
import { ServiceCard } from "@/components/ServiceCard";
import { INew } from "@/models/news";
import { NewCard } from "@/components/NewCard";
import { BannerSlider } from "@/components/BannerSlider";
import { SmartFeature } from "@/components/SmartFeature";
import { Footer } from "@/components/Footer";
import PageSEO from "@/seo/Seo";

export async function getStaticProps() {
  const productFilePath = path.join(
    process.cwd(),
    "src/pages/api/products.json"
  );
  const serviceFilePath = path.join(
    process.cwd(),
    "src/pages/api/services.json"
  );
  const newFilePath = path.join(process.cwd(), "src/pages/api/news.json");
  const productJsonData = await fsPromises.readFile(productFilePath);
  const serviceJsonData = await fsPromises.readFile(serviceFilePath);
  const newJsonData = await fsPromises.readFile(newFilePath);

  const productData = JSON.parse(productJsonData as any);
  const serviceData = JSON.parse(serviceJsonData as any);
  const newData = JSON.parse(newJsonData as any);

  return {
    props: {
      products: productData?.products as IProduct[],
      services: serviceData?.services as IService[],
      news: newData?.news as INew[],
    },
  };
}

export default function Home(
  props: InferGetServerSidePropsType<typeof getStaticProps>
) {
  const { products, services, news } = props;

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
    <React.Fragment>
      <PageSEO
        title="Trang chủ - Gia Xe Ford VN"
        description="Trang chủ giá xe Ford VN"
      />
      <Header />
      <SmartFeature />
      {/*  Banner section  */}
      <div className="w-full relative mt-[7rem] mobile: h-[50vh] tablet:h-[calc(100vh-12rem)] laptop_large:h-[calc(100vh-10rem)]  mobile:max-h-[50vh] tablet:max-h-[calc(100vh-12rem)] laptop_large:max-h-[calc(100vh-10rem)] ">
        <BannerSlider data={bannerImages} />
      </div>

      <main className="max-w-9/10 mx-auto ">
        {/*  Products section  */}
        <section className="flex flex-col text-center my-[5rem]">
          <h3 className={textSection}>Sản phẩm thịnh hành</h3>
          <div className="grid mobile:grid-cols-1 tablet:grid-cols-3 laptop_large:grid-cols-4 gap-[1rem]">
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
          </div>
        </section>

        {/*  Services section  */}
        <section className="flex flex-col text-center my-[5rem]">
          <h3 className={textSection}>Hỗ trợ khi mua xe</h3>
          <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 laptop_large:grid-cols-3 mobile:gap-[2rem] tablet:gap-[5rem] mt-[2rem]">
            {services &&
              services.map((service) => {
                return <ServiceCard key={service.id} data={service} />;
              })}
          </div>
        </section>

        {/*  News section  */}
        <section className="flex flex-col text-center my-[5rem]">
          <h3 className={textSection}>Tin tức về Ford</h3>
          <div className="grid mobile:grid-cols-1 tablet:grid-cols-3 mobile:gap-[2rem] tablet:gap-[5rem] mt-[2rem]">
            {news &&
              news.map((item) => {
                return <NewCard key={item.id} data={item} />;
              })}
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
}
