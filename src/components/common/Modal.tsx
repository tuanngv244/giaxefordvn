import React, { FC, ReactNode } from "react";
import { Icon } from "./Icon";
import { VoidFunc } from "@/types/general";

type ModalProps = {
  renderHead?: ReactNode;
  renderBody?: ReactNode;
  renderFoot?: ReactNode;
  onClose?: VoidFunc;
  isShow: boolean;
};

export const Modal: FC<ModalProps> = ({
  renderHead,
  renderBody,
  renderFoot,
  onClose,
  isShow = false,
}) => {
  return (
    <div
      className={`${
        isShow ? "fixed block" : "hidden"
      } w-full h-full top-0 left-0 bg-blackRgba`}
    >
      <div className="bg-white shadow-modal mix-blend-normal center-portal p-[2rem] min-w-[35rem] min-h-auto rounded-4 ">
        <div className="flex items-center justify-between">
          {renderHead}
          <div
            onClick={onClose}
            className="absolute cursor-pointer top-[2rem] right-[2rem]"
          >
            <Icon name="close" />
          </div>
        </div>
        {renderBody}
        {renderFoot}
      </div>
    </div>
  );
};
