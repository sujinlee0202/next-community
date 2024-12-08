interface InputErrorProps {
  error: string | undefined;
}

const InputError = ({ error }: InputErrorProps) => {
  return <p className="pl-1 text-sm leading-[0.5rem] text-red-500">{error}</p>;
};
export default InputError;
