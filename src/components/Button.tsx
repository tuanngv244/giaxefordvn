import { VoidFunc } from "@/types/general";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

type ButtonProps = {
  name: string;
  action?: VoidFunc;
  icon?: string;
  rest?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  className?: string;
};

export const Button: FC<ButtonProps> = ({
  name,
  action,
  icon,
  className,
  rest,
}) => {
  return (
    <button
      onClick={action}
      {...rest}
      className={`rounded-30 cursor-pointer px-[1.2rem] py-[0.8rem] bg-main text-white hover:bg-white hover:text-main border border-solid border-transparent hover:border-main ${className}`}
    >
      {name}
    </button>
  );
};
