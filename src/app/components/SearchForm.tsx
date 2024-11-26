"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";
import Input from "./ui/Input";

type SearchInputsType = {
  search: string;
};

const SearchForm = () => {
  const { register, handleSubmit } = useForm<SearchInputsType>();

  const onSubmit: SubmitHandler<SearchInputsType> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative h-full">
        <Input type="text" className="w-60" {...register("search")} />
        <button type="submit">
          <CiSearch className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-xl text-gray-400" />
        </button>
      </div>
    </form>
  );
};
export default SearchForm;
