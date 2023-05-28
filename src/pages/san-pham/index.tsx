import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { SmartFeature } from "@/components/SmartFeature";
import { IService } from "@/models/services";
import { Option } from "@/types/general";
import { invalidPhone } from "@/types/validation";
import fsPromises from "fs/promises";
import { InferGetServerSidePropsType } from "next";
import path from "path";
import React, { useReducer } from "react";
import { useForm } from "react-hook-form";
import BuyFordInstallment from "public/images/mua-xe-tra-gop.jpg";
import { ProductCard } from "@/components/ProductCard";
import { IProduct } from "@/models/products";

export async function getStaticProps() {
  const products = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/product`
  ).then((res) => res.json());

  return {
    props: {
      products: products,
    },
  };
}

export default function Product(
  props: InferGetServerSidePropsType<typeof getStaticProps>
) {
  const { products } = props;

  const textSection = `text-main relative text-uppercase text-5xl my-0  after after:absolute after:top-[50%] after:left-[20%] after:translate-y-[-50%] after:content-[''] after:w-[20rem] after:h-[0.1rem] after:bg-main before:absolute before:top-[50%] before:right-[20%] before:translate-y-[-50%] before:content-[''] before:w-[20rem] before:h-[0.1rem] before:bg-main mobile:after:opacity-0 mobile:before:opacity-0 tablet:after:opacity-100 tablet:before:opacity-100 `;

  const onInstallment = async () => {};

  return (
    <React.Fragment>
      <Header />
      <SmartFeature />
      <main className="max-w-9/10 mx-auto ">
        {/*  Services section  */}
        <section className="flex flex-col text-center my-[10rem]">
          <h3 className={textSection}>Sản phẩm</h3>
          <div className="grid mobile:grid-cols-1 tablet:grid-cols-3 laptop_large:grid-cols-4 gap-[1rem]">
            {products &&
              products.map((product: IProduct) => (
                <ProductCard key={product.id} data={product} />
              ))}
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
}
