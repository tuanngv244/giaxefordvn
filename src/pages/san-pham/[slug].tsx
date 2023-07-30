import { GetStaticPaths } from "next";
import Image from "next/image";

import useSWR from "swr";
import { IBlog } from "@/models/news";
import { Header } from "@/components/Header";
import { SmartFeature } from "@/components/SmartFeature";
import React from "react";
import { Footer } from "@/components/Footer";
import { NewCard } from "@/components/NewCard";
import { IProduct } from "@/models/products";
import { ProductCard } from "@/components/ProductCard";
import { fetcher } from "@/utils/helpers";

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/product`);
  const products = await res.json();

  const paths = products.map((post: IBlog) => ({
    params: { slug: post.slug.toString() },
  }));

  return { paths, fallback: "blocking" };
};

export async function getStaticProps({ params }: { params: any }) {
  const product = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/product?slug=${params?.slug}`
  ).then((res) => res.json());

  const products = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/product`
  ).then((res) => res.json());

  return {
    props: {
      product: product,
      products: products,
    },
    revalidate: 60,
  };
}
const ProductDetail = (props: {
  product: IProduct[];
  products: IProduct[];
}) => {
  const { product, products } = props || {};

  const { title, content, _links } = (product && product[0]) || {};

  const mediaWP = _links["wp:featuredmedia"] && _links["wp:featuredmedia"][0];
  const getURLmedia = mediaWP?.href;
  const { data: imgData, error, isLoading } = useSWR(getURLmedia, fetcher);

  const textSection = `text-main relative text-uppercase text-5xl my-0  after after:absolute after:top-[50%] after:left-[20%] after:translate-y-[-50%] after:content-[''] after:w-[20rem] after:h-[0.1rem] after:bg-main before:absolute before:top-[50%] before:right-[20%] before:translate-y-[-50%] before:content-[''] before:w-[20rem] before:h-[0.1rem] before:bg-main mobile:after:opacity-0 mobile:before:opacity-0 tablet:after:opacity-100 tablet:before:opacity-100 `;

  return (
    <React.Fragment>
      <Header />
      <SmartFeature />
      <main className="max-w-9/10 mx-auto  ">
        <section className="flex flex-col text-center my-[10rem]">
          <div className="my-3 flex gap-[3rem]">
            <div className=" mobile:w-[100%] mobile:h-[18rem] tablet:w-[50rem] tablet:h-[25rem] relative overflow-hidden">
              <Image
                fill
                sizes="100vw"
                src={imgData?.source_url}
                alt={imgData?.title?.rendered}
                className="w-full h-full"
              />
            </div>
          </div>
          <h3 className={`relative  text-5xl text-uppercase text-black`}>
            {title?.rendered}
          </h3>
          <div
            className="text-2xl max-w-[100%] overflow-hidden "
            dangerouslySetInnerHTML={{ __html: content?.rendered as string }}
          />

          <h3 className={`${textSection} my-[4rem]`}>Sản phẩm khác</h3>
          <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 mobile:gap-[2rem] tablet:gap-[5rem] ">
            {products &&
              products.map((pro: IProduct) => {
                return <ProductCard key={pro.id} data={pro} />;
              })}
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default ProductDetail;
