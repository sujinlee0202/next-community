import { ComponentPropsWithoutRef, useId } from "react";

interface CheckboxType extends Omit<ComponentPropsWithoutRef<"input">, "id"> {
  type: "checkbox";
}

const Checkbox = ({ children, ...rest }: CheckboxType) => {
  const uid = useId();

  return (
    <div className="flex items-center gap-2">
      <input
        className="h-5 w-5 shrink-0 appearance-none rounded border border-gray-400 bg-[url('/check.svg')] bg-center bg-no-repeat checked:bg-[url('/check_blue.svg')]"
        id={uid}
        {...rest}
      />
      <label htmlFor={uid}>{children}</label>
    </div>
  );
};
export default Checkbox;
