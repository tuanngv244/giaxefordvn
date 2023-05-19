import { FC, useState } from "react";
import { Icon, IconName } from "./Icon";
import { Modal } from "./Modal";
import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { Button } from "./Button";
import { invalidPhone } from "@/types/validation";
import Tippy from "@tippyjs/react";

type SmartFeatureProps = {};

type ReceivedPriceFormData = {
  phone?: string;
};

type RegisterDriveFromData = {
  phone?: string;
  name: string;
  email?: string;
  city?: string;
};

export const SmartFeature: FC<SmartFeatureProps> = () => {
  const [modal, setModal] = useState<{
    status: boolean;
    type?: "received_price";
  }>({ status: false, type: "received_price" });

  const receivedPriceForm = useForm<ReceivedPriceFormData>();
  const registerDrive = useForm<RegisterDriveFromData>();

  const smarts = [
    {
      key: "received_price",
      content: "Chọn xe và nhận báo giá",
      icon: "car",
    },
    {
      key: "register_drive",
      content: "Đăng ký lái thử",
      icon: "customer",
    },
    {
      key: "find_location",
      content: "Tìm đại lý",
      icon: "location",
    },
  ];

  const onReceivedPrice = async () => {};

  const renderContentModal = () => {
    if (modal.type == "received_price")
      return (
        <form
          className="pt-[2rem] flex flex-col items-center "
          onSubmit={receivedPriceForm.handleSubmit(onReceivedPrice)}
        >
          <Input
            value={receivedPriceForm.watch("phone")}
            {...receivedPriceForm.register("phone", {
              required: "Vui lòng nhập số điện thoại để nhận báo giá!",
              validate: (value) => {
                if (!invalidPhone(value))
                  return "Định dạng số điện thoại không hợp lệ!";
                return undefined;
              },
            })}
            placeholder="Vui lòng nhập số điện thoại..."
            error={Boolean(receivedPriceForm.formState.errors?.phone?.message)}
            messageError={receivedPriceForm.formState.errors?.phone?.message}
          />
          <Button
            rest={{
              type: "submit",
            }}
            name="Nhận báo giá"
            className="mt-[1.5rem]"
          />
        </form>
      );
  };

  const renderHeadModal = () => {
    if (modal.type == "received_price") return "Nhận báo giá và ưu đãi";
  };

  return (
    <div className="fixed z-50 flex items-center gap-[1rem] mobile:bottom-[1rem] mobile:right-[1rem] tablet:right-[2rem] tablet:bottom-[2rem] bg-main400  p-[1rem] rounded-4 shadow-modal  ">
      {smarts.map((smart, i) => (
        <Tippy key={i} content={smart.content}>
          <div
            onClick={() => {
              if (smart.key == "received_price")
                return setModal({ status: true, type: "received_price" });
            }}
            className="flex cursor-pointer justify-center items-center w-[4rem] h-[4rem] rounded-4 bg-white"
          >
            <Icon name={smart.icon as IconName} />
          </div>
        </Tippy>
      ))}
      <Modal
        isShow={modal.status}
        renderHead={
          <h6 className="text-2xl uppercase text-black font-600 my-0 ">
            {renderHeadModal()}
          </h6>
        }
        renderBody={renderContentModal()}
        onClose={() => {
          setModal({ status: false, type: "received_price" });
        }}
      />
    </div>
  );
};
