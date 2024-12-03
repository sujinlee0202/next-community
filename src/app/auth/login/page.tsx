"use client";

import Logo from "@/app/components/Logo";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

const page = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};

  return (
    <section className="bg-gray-50 font-pretendard">
      <div className="m-auto h-full min-h-[100vh] w-full max-w-[760px] bg-white sm:border-l sm:border-r">
        {/** Login page header */}
        <div className="w-full border-b p-4">
          <Logo />
        </div>

        {/** 로그인 Container */}
        <div className="flex w-full flex-col items-center px-40">
          <h1 className="py-10 text-2xl font-bold">로그인</h1>

          {/** 로그인 폼 */}
          <form
            className="flex w-full flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/** input 입력 부분 */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">이메일</label>
              <Input
                type="email"
                className="h-11"
                placeholder="이메일을 입력해주세요."
                {...register("email", {
                  required: {
                    value: true,
                    message: "",
                  },
                  maxLength: {
                    value: 30,
                    message: "",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: "",
                  },
                })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">비밀번호</label>
              <Input
                type="password"
                className="h-11"
                placeholder="영문, 숫자 포함 6자 이상"
                {...register("password", {
                  required: "",
                  minLength: {
                    value: 6,
                    message: "",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
                    message: "",
                  },
                })}
              />
            </div>
            {/** 회원가입 버튼 */}
            <Button className="button-gray h-11 border font-bold">
              로그인
            </Button>
          </form>

          <div className="flex w-full items-center gap-4 py-4 text-xs text-slate-500">
            <div className="w-full border-b border-slate-300"></div>
            <p className="shrink-0">또는</p>
            <div className="w-full border-b border-slate-300"></div>
          </div>

          {/** SNS 로그인 */}
          <div className="flex w-full flex-col gap-3">
            <Button className="flex h-11 w-full items-center justify-center gap-2 bg-[#fee500]">
              <Image
                src="/kakao_login_symbol.png"
                alt="kakao login"
                width={20}
                height={20}
              />
              <div className="font-bold">카카오로 계속하기</div>
            </Button>
            <Button className="flex h-11 w-full items-center justify-center gap-2 bg-[#03c75a]">
              <Image
                src="/naver_login_white.svg"
                alt="naver login"
                width={20}
                height={20}
              />
              <div className="font-bold text-white">네이버로 계속하기</div>
            </Button>
            <Button className="flex h-11 w-full items-center justify-center gap-2 border border-gray-400 bg-white">
              <Image
                src="/google_login.svg"
                alt="naver login"
                width={20}
                height={20}
              />
              <div className="font-bold">Google로 계속하기</div>
            </Button>
          </div>

          {/** 회원가입 페이지로 이동 */}
          <p className="pt-8 text-sm">
            아직 회원이 아니신가요?
            <Link href="/auth/signup" className="pl-2 font-bold text-red-500">
              회원가입 하기
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default page;
