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
import { formatCurrency } from "@/utils/general";

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

export const priceListData = [
  {
    id: 1,
    name: "Giá xe Territory thế hệ mới",
    groups: [
      {
        type: "Territory Titanium X 1.5 AT",
        price: 954000000,
      },
      {
        type: "Territory Titanium 1.5 AT",
        price: 909000000,
      },
      {
        type: "Territory Trend 1.5 AT",
        price: 822000000,
      },
    ],
  },
  {
    id: 2,
    name: "Giá xe Everest thế hệ mới",
    groups: [
      {
        type: "Everest Wildtrak 2.0L AT 4x4",
        price: 1499000000,
      },
      {
        type: "Everest Wildtrak 2.0L AT 4x4",
        description: "Màu trắng tuyết/Màu đỏ cam/Màu vàng Luxe",
        price: 1506000000,
      },
      {
        type: "Everest Titanium+ 2.0L AT 4x4",
        price: 1468000000,
      },
      {
        type: "Everest Titanium+ 2.0L AT 4x4",
        description: "Màu trắng tuyết/Màu đỏ cam",
        price: 1475000000,
      },
      {
        type: "Everest Titanium+ 2.0L AT 4x4",
        description: "Nội thất da màu hạt dẻ",
        price: 1475000000,
      },
      {
        type: "Everest Titanium+ 2.0L AT 4x4",
        description: "Màu đỏ tuyết/Màu đỏ cam kết hợp nội thất da màu hạt dẻ",
        price: 1482000000,
      },
      {
        type: "Everest Titanium+ 2.0L AT 4x2",
        price: 1299000000,
      },
      {
        type: "Everest Titanium+ 2.0L AT 4x2",
        description: "Màu đỏ tuyết/Màu đỏ cam",
        price: 1306000000,
      },
      {
        type: "Everest Titanium+ 2.0L AT 4x2",
        description: "Nội thất da màu hạt dẻ",
        price: 1306000000,
      },
      {
        type: "Everest Titanium+ 2.0L AT 4x2",
        description:
          "Màu trắng tuyết/Màu đỏ cam kết hợp với nội thất da màu hạt dẻ",
        price: 1313000000,
      },
      {
        type: "Everest Sport 2.0L AT 4x2",
        price: 1178000000,
      },
      {
        type: "Everest Sport 2.0L AT 4x2",
        description: "Màu đỏ tuyết/Màu đỏ cam",
        price: 1185000000,
      },
      {
        type: "Everest Ambiente 2.0L AT 4x2",
        price: 1099000000,
      },
    ],
  },
  {
    id: 3,
    name: "Giá xe Explorer",
    groups: [
      {
        type: "Explorer Limited",
        description: "Động cơ xăng 2.3L EcoBoost 14 Số tự động 10 cấp",
        price: 2439000000,
      },
    ],
  },
  {
    id: 4,
    name: "Giá xe Ranger thế hệ mới",
    groups: [
      {
        type: "Ranger Wildtrak 2.0L AT 4x4",
        price: 979000000,
      },
      {
        type: "Ranger Wildtrak 2.0L AT 4x4",
        description: "Màu vàng Luxe/Màu đỏ cam",
        price: 986000000,
      },
      {
        type: "Ranger Sport 2.0L AT 4x4",
        price: 864000000,
      },
      {
        type: "Ranger Sport 2.0L AT 4x4",
        description: "Màu đỏ cam",
        price: 871000000,
      },
      {
        type: "Ranger XLT LTD 2.0L 4x4 AT",
        price: 830000000,
      },
      {
        type: "Ranger XLS 2.0L 4x4 AT",
        price: 776000000,
      },
      {
        type: "Ranger XLS 2.0L 4x2 AT",
        price: 707000000,
      },
      {
        type: "Ranger XLS 2.0L 4x2 MT",
        price: 665000000,
      },
      {
        type: "Ranger XL 2.0L 4x4 MT",
        price: 669000000,
      },
    ],
  },
  {
    id: 5,
    name: "Giá xe Ranger Raptor thế hệ mới",
    groups: [
      {
        type: "Ranger Raptor 2.0L 4WD AT",
        price: 1299000000,
      },
      {
        type: "Ranger Raptor 2.0L EWD AT",
        description: "Màu xám/Màu đỏ cam",
        price: 1306000000,
      },
    ],
  },
  {
    id: 6,
    name: "Giá xe Transit",
    groups: [
      {
        type: "Transit Tiêu chuẩn",
        description: "Động cơ Turbo Diesel 2.2L Số tay cấp 6",
        price: 849000000,
      },
    ],
  },
];

export default function PriceList(
  props: InferGetServerSidePropsType<typeof getStaticProps>
) {
  const { products } = props;

  const data = priceListData;

  const textSection = `text-main relative text-uppercase text-5xl my-0  after after:absolute after:top-[50%] after:left-[20%] after:translate-y-[-50%] after:content-[''] after:w-[20rem] after:h-[0.1rem] after:bg-main before:absolute before:top-[50%] before:right-[20%] before:translate-y-[-50%] before:content-[''] before:w-[20rem] before:h-[0.1rem] before:bg-main mobile:after:opacity-0 mobile:before:opacity-0 tablet:after:opacity-100 tablet:before:opacity-100 `;

  const subTextContent =
    " relative text-2xl lh-[2rem] my-0 text-gray text-center mt-[2rem] ";

  const onInstallment = async () => {};

  return (
    <React.Fragment>
      <Header />
      <SmartFeature />
      <main className="max-w-9/10 mx-auto ">
        {/*  Services section  */}
        <section className="flex flex-col text-center mt-[10rem]  mobile:mb-[2rem] tablet:mb-[5rem]">
          <h3 className={textSection}>Bảng Giá Xe Ford 2023</h3>
          <p className={subTextContent}>
            Bảng giá khuyến nghị từ nhà sản xuất cho toàn bộ các dòng xe ô tô
            Ford bao gồm xe SUV 5 chỗ hạng C - Ford Territory, SUV 7 chỗ Ford
            Everest và Ford Explorer, xe bán tải Ford Ranger & Ford Ranger
            Raptor, xe Ford Transit 16 chỗ. Quý khách hàng có thể tham khảo và
            tìm hiểu thêm về chương trình khuyến mãi, hoặc yêu cầu nhận báo giá
            xe hơi Ford. Vui lòng liên hệ Đại lý Ford để nhận được chính sách
            mua xe trả góp với lãi suất hấp dẫn.
          </p>
        </section>

        <section className="my-[2rem]">
          {data?.map((entity) => {
            return (
              <div
                className="flex tablet:flex-row mobile:flex-col  items-start gap-[1.6rem] py-[2rem] border-b-3"
                key={entity.id}
              >
                <div className="left mobile:w-[100%] tablet:w-[50rem]">
                  <h3 className="mobile:text-3xl tablet:text-5xl text-center text-main500 uppercase my-0">
                    {entity?.name}
                  </h3>
                </div>
                <div className="mobile:w-[100%] tablet:w-[calc(100%_-_50rem)] right flex items-start gap-[1.6rem]">
                  <div className="first w-[50%] ">
                    <div className="head mobile:min-h-[4.6rem] tablet:min-h-[100%] text-3xl text-black mb-[1rem]">
                      Mẫu xe
                    </div>
                    <div className="body [&>*:nth-child(odd)]:bg-lightGray10 [&>*:nth-child(even)]:bg-main100 ">
                      {entity?.groups?.map((item, idx) => (
                        <div
                          className="p-[0.5rem] mobile:min-h-[13.4rem]  tablet:min-h-[8.4rem]"
                          key={idx}
                        >
                          <p className="text-xl text-black">{item?.type}</p>
                          <p className="text-xl text-darkGray italic">
                            {item?.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="second w-[50%] ">
                    <div className="head mobile:min-h-[4.6rem] tablet:min-h-[100%] text-3xl text-black mb-[1rem]">
                      {entity?.name}
                    </div>
                    <div className="body [&>*:nth-child(odd)]:bg-lightGray10 [&>*:nth-child(even)]:bg-main100">
                      {entity?.groups?.map((item, idx) => (
                        <div
                          className="p-[0.5rem] mobile:min-h-[13.4rem]  tablet:min-h-[8.4rem] "
                          key={idx}
                        >
                          <p className="text-xl text-black font-bold">
                            {formatCurrency(item?.price) + " vnđ"}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
}
