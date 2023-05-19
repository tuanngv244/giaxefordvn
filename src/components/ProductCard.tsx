import { IProduct } from "@/models/products";
import Image from "next/image";
import { FC } from "react";
import { Button } from "./Button";
import FakeImage from "public/images/gia-xe-ford-vn-1.avif";
import Link from "next/link";
import { formatCurrency } from "@/utils/general";

type ProductCardProps = {
  data: IProduct;
};

export const ProductCard: FC<ProductCardProps> = ({ data }) => {
  const { content, image_url, title, id, price } = data || {};

  const onViewProduct = () => {};

  return (
    <div
      id={title + id}
      className="flex flex-col mobile:p-0 tablet:p-[1rem] items-center mb-[1rem] inline-block w-full "
    >
      <div className=" mobile:w-[100%] mobile:h-[18rem] tablet:w-[36rem] tablet:h-[18rem] relative overflow-hidden">
        <Image
          fill
          sizes="100vw"
          src={image_url}
          alt={content}
          className="w-full h-full"
        />
      </div>
      <div className="my-[1rem] flex items-center flex-col">
        <h4 className="my-[1rem]">
          <Link
            className=" text-3xl text-darkMain font-700 no-underline hover:text-main600"
            href="#"
          >
            {title}
          </Link>
        </h4>
        <p className="text-gray text-xl my-0 font-600 ">
          {" "}
          {formatCurrency(Number(price))?.toString()} VNĐ{" "}
        </p>
        <Button
          action={onViewProduct}
          name={"Chi tiết xe"}
          className="mt-[1rem] min-w-[12rem] "
        />
      </div>
    </div>
  );
};
