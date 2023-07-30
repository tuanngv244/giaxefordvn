import React, {
  ComponentProps,
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  LegacyRef,
} from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  error?: boolean;
  messageError?: string;
  rest?: any;
};

export const Input: FC<InputProps> = ({
  type,
  error,
  messageError,
  rest,
  ...props
}) => {
  return (
    <React.Fragment>
      <input
        className="w-[100%] h-[3rem] placeholder:text-lightGray100  rounded-4 border border-solid border-lightGray  focus:outline-none"
        type={type ?? "text"}
        style={{
          textIndent: "1rem",
        }}
        {...rest}
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
