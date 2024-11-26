import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputType extends ComponentPropsWithoutRef<"input"> {
  type: "text" | "password" | "email" | "number" | "date";
}

const Input = ({ className, ...rest }: InputType) => {
  return (
    <input
      className={twMerge(
        "h-full rounded-lg border border-borderGray px-2 py-1",
        className,
      )}
      {...rest}
    />
  );
};
export default Input;
