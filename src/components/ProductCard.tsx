import { IProduct } from "@/models/products";
import Image from "next/image";
import { FC } from "react";
import { Button } from "./Button";
import FakeImage from "public/images/gia-xe-ford-vn-1.avif";
import Link from "next/link";
import { formatCurrency } from "@/utils/general";
import useSWR from "swr";
import { fetcher } from "@/utils/helpers";

type ProductCardProps = {
  data: IProduct;
};

export const ProductCard: FC<ProductCardProps> = ({ data }) => {
  const { content, title, id, _links, excerpt, slug } = data || {};

  const mediaWP = _links["wp:featuredmedia"] && _links["wp:featuredmedia"][0];
  const getURLmedia = mediaWP?.href;
  const { data: imgData } = useSWR(getURLmedia, fetcher);

  const transformPrice = excerpt?.rendered?.replaceAll(/<\/?p>|\n/g, "");

  return (
    <div
      id={id?.toString()}
      className="flex flex-col mobile:p-0 tablet:p-[1rem] items-center mb-[1rem] inline-block w-full "
    >
      <div className=" mobile:w-[100%] mobile:h-[18rem] tablet:w-[36rem] tablet:h-[18rem] relative overflow-hidden">
        <Image
          fill
          sizes="100vw"
          src={imgData?.source_url}
          alt={imgData?.title?.rendered}
          className="w-full h-full"
        />
      </div>
      <div className="my-[1rem] flex items-center flex-col">
        <h4 className="my-[1rem]">
          <Link
            className=" text-3xl text-darkMain font-700 no-underline hover:text-main600"
            href="#"
          >
            {title?.rendered}
          </Link>
        </h4>
        <p className="text-gray text-xl my-0 font-600 ">
          {" "}
          {formatCurrency(Number(transformPrice))?.toString()} VNĐ{" "}
        </p>
        <Link
          className="text-white border border-solid border-main bg-main rounded-30 px-[1.6rem] py-[0.8rem] inline-block w-fit hover:bg-main400 hover:border-main400 transition duration-200 ease-in text-2xl no-underline flex items-center gap-[1rem] mt-[1rem]"
          href={`/san-pham/${slug}`}
        >
          {"Chi tiết xe"}
        </Link>
      </div>
    </div>
  );
};
