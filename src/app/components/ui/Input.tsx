import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputType extends ComponentPropsWithoutRef<"input"> {
  type: "text" | "password" | "email" | "number" | "date";
}

const Input = ({ className, ...rest }: InputType) => {
  return (
    <input
      className={twMerge(
        "border-borderGray rounded-lg border px-2 py-1",
        className,
      )}
      {...rest}
    />
  );
};
export default Input;
