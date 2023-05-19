import { IProduct } from "@/models/products";
import Image from "next/image";
import { FC } from "react";
import { Button } from "./Button";
import FakeImage from "public/images/gia-xe-ford-vn-1.avif";
import Link from "next/link";
import { formatCurrency } from "@/utils/general";
import { IService } from "@/models/services";
import { Icon } from "./Icon";

type NewCardProps = {
  data: IService;
};

export const NewCard: FC<NewCardProps> = ({ data }) => {
  const { content, image_url, title, id } = data || {};

  const onViewService = () => {};

  return (
    <div className="relative mb-[2rem]">
      <Image
        src={image_url as string}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="relative"
        alt={title}
      />
      <div className=" block text-left">
        <h4 className="text-black text-4xl my-[1rem]">{title}</h4>
        <p className="text-black text-2xl mt-0 mb-[2rem] truncate-config">
          {content}
        </p>
        <Link
          className="text-white border border-solid border-main bg-main rounded-30 px-[1.6rem] py-[0.8rem] inline-block w-fit hover:bg-main400 hover:border-main400 transition duration-200 ease-in text-2xl no-underline flex items-center gap-[1rem]"
          href="#"
        >
          {"Đọc thêm"} <Icon name="arrow-next" />{" "}
        </Link>
      </div>
    </div>
  );
};
