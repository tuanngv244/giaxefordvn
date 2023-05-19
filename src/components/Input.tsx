import React, {
  ComponentProps,
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
} from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  error?: boolean;
  messageError?: string;
};

export const Input: FC<InputProps> = ({
  type,
  value,
  error,
  messageError,
  ...props
}) => {
  return (
    <React.Fragment>
      <input
        className="w-[100%] h-[3rem] placeholder:text-lightGray100  rounded-4 border border-solid border-lightGray  focus:outline-none"
        type={type ?? "text"}
        value={value}
        style={{
          textIndent: "1rem",
        }}
        {...props}
      />
      {error && (
        <span className="block w-full text-left text-red-600 text-base mt-[1rem] ">
          {messageError}
        </span>
      )}
    </React.Fragment>
  );
};
