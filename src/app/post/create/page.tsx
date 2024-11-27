"use client";

import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import Textarea from "@/app/components/ui/Textarea";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaArrowLeftLong } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

type CreatePostInputsType = {
  title: string;
  content: string;
};

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<CreatePostInputsType>();
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const onSubmit: SubmitHandler<CreatePostInputsType> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="h-screen font-pretendard"
      onSubmit={handleSubmit(onSubmit)}
    >
      <nav className="fixed left-0 top-0 z-10 h-[50px] w-full border-b bg-white">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-2">
          <FaArrowLeftLong onClick={handleBack} className="cursor-pointer" />
          <div className="flex h-8 items-center gap-2">
            <Button
              className={twMerge(
                "button-small h-full border py-1 font-bold text-borderGray",
                isValid && "border-[#64748b] text-[#64748b]",
              )}
            >
              임시 저장
            </Button>
            <Button
              className={twMerge(
                "button-small h-full border py-1 font-bold text-borderGray",
                isValid && "button-gray text-white",
              )}
            >
              완료
            </Button>
          </div>
        </div>
      </nav>

      {/** content 작성 */}
      <main className="scrollbar-hide mx-auto flex h-full w-full max-w-2xl flex-col gap-5 overflow-auto px-2 pt-20">
        <Input
          type="text"
          placeholder="제목을 입력해주세요."
          className="h-7 w-full border-none text-2xl font-bold outline-none"
          {...register("title", {
            required: true,
          })}
        />
        <div className="border-b"></div>
        {/* <div contentEditable="true" className="outline-none"></div> */}
        <Textarea
          placeholder="나누고 싶은 생각을 적어주세요."
          className="scrollbar-hide mb-20 h-full resize-none border-none outline-none"
          {...register("content", {
            required: true,
          })}
        />
      </main>
    </form>
  );
};
export default page;
