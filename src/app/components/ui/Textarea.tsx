import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

type TextareaType = ComponentPropsWithoutRef<"textarea">;

const Textarea = ({ className, ...rest }: TextareaType) => {
  return (
    <textarea
      className={twMerge(
        "rounded-lg border border-borderGray px-2 py-1",
        className,
      )}
      {...rest}
    />
  );
};
export default Textarea;
