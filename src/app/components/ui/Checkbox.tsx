import { ComponentPropsWithoutRef, useId } from "react";

interface CheckboxType extends Omit<ComponentPropsWithoutRef<"input">, "id"> {
  type: "checkbox";
}

const Checkbox = ({ children, ...rest }: CheckboxType) => {
  const uid = useId();

  return (
    <div className="flex items-center gap-2">
      <input id={uid} {...rest} />
      <label htmlFor={uid}>{children}</label>
    </div>
  );
};
export default Checkbox;
