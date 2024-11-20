import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

type ButtonType = ComponentPropsWithoutRef<"button">;

const Button = ({ className, children, ...rest }: ButtonType) => {
  return (
    <button className={twMerge("rounded-lg", className)} {...rest}>
      {children}
    </button>
  );
};
export default Button;
