import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { ServiceCard } from "@/components/ServiceCard";
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

export async function getStaticProps() {
  const serviceFilePath = path.join(
    process.cwd(),
    "src/pages/api/services.json"
  );
  const serviceJsonData = await fsPromises.readFile(serviceFilePath);

  const serviceData = JSON.parse(serviceJsonData as any);

  return {
    props: {
      services: serviceData?.services as IService[],
    },
  };
}

export type InstallmentFormData = {
  payment: string;
  year: number;
  phone?: string;
};

export default function Installment(
  props: InferGetServerSidePropsType<typeof getStaticProps>
) {
  const { services } = props;

  const { register, watch, handleSubmit, formState, setValue } =
    useForm<InstallmentFormData>();

  const textSection = `text-main relative text-uppercase text-5xl my-0  after after:absolute after:top-[50%] after:left-[20%] after:translate-y-[-50%] after:content-[''] after:w-[20rem] after:h-[0.1rem] after:bg-main before:absolute before:top-[50%] before:right-[20%] before:translate-y-[-50%] before:content-[''] before:w-[20rem] before:h-[0.1rem] before:bg-main mobile:after:opacity-0 mobile:before:opacity-0 tablet:after:opacity-100 tablet:before:opacity-100 `;

  const installmentPaymentOptions = Array.from({ length: 10 }).reduce(
    (acc, curr, idx) => {
      const index = idx + 1;
      acc = [
        ...(acc as []),
        {
          label:
            (index == 10 ? "1.0" : index.toString()) + "00.000.000" + " VNĐ",
          value: (index == 10 ? "1.0" : index) + "00.000.000",
        },
      ];
      return acc;
    },
    [] as Option[]
  );
  const installmentYearOptions = Array.from({ length: 10 }).reduce(
    (acc, curr, idx) => {
      const index = idx + 1;
      acc = [
        ...(acc as []),
        {
          label: index + " Năm",
          value: index,
        },
      ];
      return acc;
    },
    [] as Option[]
  );

  const onInstallment = async () => {};

  return (
    <React.Fragment>
      <Header />
      <SmartFeature />
      <main className="max-w-9/10 mx-auto ">
        {/*  Services section  */}
        <section className="flex flex-col text-center my-[10rem]">
          <h3 className={textSection}>Mua xe trả góp</h3>
          <p className="text-center text-xl text-gray">
            Điền thông tin để nhận bảng dự toán chi tiết cả Lãi và Gốc phải trả
            hàng tháng khi mua xe tại Giá xe Ford VN.
          </p>
          <div className="grid mobile:grid-cols-1 tablet:grid-cols-[60rem_1fr] mobile:gap-[2rem] tablet:gap-[3rem] mt-[2rem]">
            <div>
              <img
                className="latop:w-[60rem] tablet:w-[40rem] mobile:w-full"
                src={"images/mua-xe-tra-gop.jpg"}
              />
            </div>
            <form
              onSubmit={handleSubmit(onInstallment)}
              className="flex flex-col gap-[2rem]"
            >
              <p className="text-gray text-left text-xl ">
                Quý khách chọn số <strong>tiền trả trước</strong>, số{" "}
                <strong>năm vay</strong> bên dưới: để xem bảng dự toán cả Lãi và
                Gốc phải trả hàng tháng khi mua xe.
              </p>
              <div className="flex items-center gap-[2rem]">
                <Select
                  options={installmentPaymentOptions as Option[]}
                  onSelectData={(data?: Option) => {
                    setValue("payment", data?.value as string);
                  }}
                />
                <Select
                  options={installmentYearOptions as Option[]}
                  onSelectData={(data?: Option) => {
                    setValue("year", data?.value as number);
                  }}
                />
              </div>
              <div>
                <Input
                  value={watch("phone")}
                  {...register("phone", {
                    required:
                      "Vui lòng nhập số điện thoại để nhận tính toán giá trị trả góp!",
                    validate: (value) => {
                      if (!invalidPhone(value))
                        return "Định dạng số điện thoại không hợp lệ!";
                      return undefined;
                    },
                  })}
                  placeholder="Vui lòng nhập số điện thoại..."
                  error={Boolean(formState.errors?.phone?.message)}
                  messageError={formState.errors?.phone?.message}
                />
              </div>
              <div className="flex items-center">
                <Button
                  className="w-full"
                  rest={{ type: "submit" }}
                  name="Xem bảng thống kê chi tiết"
                />
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
}
