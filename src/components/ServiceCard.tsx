import { IProduct } from "@/models/products";
import Image from "next/image";
import { FC } from "react";
import { Button } from "./Button";
import FakeImage from "public/images/gia-xe-ford-vn-1.avif";
import Link from "next/link";
import { formatCurrency } from "@/utils/general";
import { IService } from "@/models/services";
import { Icon } from "./Icon";

type ServiceCardProps = {
  data: IService;
};

export const ServiceCard: FC<ServiceCardProps> = ({ data }) => {
  const { content, image_url, title, id } = data || {};

  const onViewService = () => {};

  return (
    <div className="relative py-[20rem]">
      <Image src={image_url as string} fill alt={title} />
      <div className="absolute bg-gradient-to-t to-transparent from-black block content-[''] w-full h-[30rem]  bottom-0 left-0 z-20 "></div>
      <div className="absolute block bottom-0 left-0 z-30 w-[70%] text-left p-[2rem]">
        <h4 className="text-white text-4xl my-0">{title}</h4>
        <p className="text-white text-2xl my-[1.5rem] truncate-config">
          {content}
        </p>
        <Link
          className="text-white border border-solid border-white rounded-30 px-[1.2rem] py-[0.8rem] inline-block w-fit hover:bg-main400 hover:border-main transition duration-200 ease-in text-2xl no-underline flex items-center gap-[1rem]"
          href="#"
        >
          {"Tìm hiểu thêm"} <Icon name="arrow-next" />{" "}
        </Link>
      </div>
    </div>
  );
};
