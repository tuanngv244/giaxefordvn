import { IProduct } from "@/models/products";
import Image from "next/image";
import { FC } from "react";
import { Button } from "./Button";
import FakeImage from "public/images/gia-xe-ford-vn-1.avif";
import Link from "next/link";
import { Icon } from "./Icon";
import { IBlog, INew } from "@/models/news";
import useSWR from "swr";
import { fetcher } from "@/utils/helpers";

type NewCardProps = {
  data: IBlog;
};

export const NewCard: FC<NewCardProps> = ({ data }) => {
  const { content, title, id, excerpt, _links, slug } = data || {};

  const mediaWP = _links["wp:featuredmedia"] && _links["wp:featuredmedia"][0];
  const getURLmedia = mediaWP?.href;
  const { data: img, error, isLoading } = useSWR(getURLmedia, fetcher);

  const onViewService = () => {};

  return (
    <div className="relative mb-[2rem]">
      <Image
        src={img?.source_url as string}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", maxHeight: "230px", height: "auto" }}
        className="relative"
        alt={title?.rendered}
      />
      <div className=" block text-left">
        <h4 className="text-black text-4xl my-[1rem]">{title?.rendered}</h4>
        <div
          className="text-black text-2xl mt-0 mb-[2rem] truncate-config"
          dangerouslySetInnerHTML={{ __html: excerpt?.rendered }}
        />
        <Link
          className="text-white border border-solid border-main bg-main rounded-30 px-[1.6rem] py-[0.8rem] inline-block w-fit hover:bg-main400 hover:border-main400 transition duration-200 ease-in text-2xl no-underline flex items-center gap-[1rem]"
          href={`/tin-tuc/${slug}`}
        >
          {"Đọc thêm"} <Icon name="arrow-next" />{" "}
        </Link>
      </div>
    </div>
  );
};
