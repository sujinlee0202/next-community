"use client";

import InputError from "@/app/components/InputError";
import Logo from "@/app/components/Logo";
import Button from "@/app/components/ui/Button";
import Checkbox from "@/app/components/ui/Checkbox";
import Input from "@/app/components/ui/Input";
import {
  ERROR_MSG_INPUT_EMAIL,
  ERROR_MSG_INPUT_ID,
  ERROR_MSG_INPUT_REQUIRED,
  ERROR_MSG_PASSWORD,
  ERROR_MSG_PASSWORD_CONFIRM,
} from "@/app/data/message";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface SignupCheckboxType {
  privacy: boolean;
  terms: boolean;
  marketing: boolean;
  allChecked: boolean;
}

interface SignupInputsType extends SignupCheckboxType {
  id: string;
  email: string;
  password: string;
  password_confirm: string;
}

const page = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid, errors },
  } = useForm<SignupInputsType>({ mode: "onChange" });
  const passwordValue = watch("password");
  const isPrivacyChecked = watch("privacy");
  const isTermsChecked = watch("terms");
  const isMarketingChecked = watch("marketing");

  useEffect(() => {
    if (isPrivacyChecked && isTermsChecked && isMarketingChecked) {
      setValue("allChecked", true);
    } else {
      setValue("allChecked", false);
    }
  }, [isPrivacyChecked, isTermsChecked, isMarketingChecked]);

  const onChangeAllCheckbox = () => {
    const allCheckedValue = watch("allChecked");

    if (allCheckedValue) {
      setValue("privacy", true);
      setValue("terms", true);
      setValue("marketing", true);
    } else {
      setValue("privacy", false);
      setValue("terms", false);
      setValue("marketing", false);
    }
  };

  const onSubmit: SubmitHandler<SignupInputsType> = (data) => {
    const signupData = {
      email: data.email,
      id: data.id,
      password: data.password,
      policy: {
        privacy: data.privacy,
        terms: data.terms,
        marketing: data.marketing,
      },
    };

    console.log(signupData);
  };

  return (
    <section className="bg-gray-50 font-pretendard">
      <div className="m-auto h-full min-h-[100vh] w-full max-w-[760px] bg-white sm:border-l sm:border-r">
        {/** Signup page header */}
        <div className="w-full border-b p-4">
          <Logo />
        </div>

        {/** 회원가입 Container */}
        <div className="flex w-full flex-col items-center px-40">
          <h1 className="py-10 text-2xl font-bold">회원가입</h1>

          {/** 회원가입 폼 */}
          <form
            className="flex w-full flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/** input 입력 부분 */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">이메일</label>
              <Input
                type="email"
                className={twMerge("h-11", errors.email && "border-red-500")}
                placeholder="이메일을 입력해주세요."
                {...register("email", {
                  required: ERROR_MSG_INPUT_REQUIRED,
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: ERROR_MSG_INPUT_EMAIL,
                  },
                })}
              />
              {errors.email && <InputError error={errors.email.message} />}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">아이디</label>
              <Input
                type="text"
                className={twMerge("h-11", errors.id && "border-red-500")}
                placeholder="아이디를 입력해주세요."
                {...register("id", {
                  required: ERROR_MSG_INPUT_REQUIRED,
                  maxLength: {
                    value: 30,
                    message: ERROR_MSG_INPUT_ID,
                  },
                })}
              />
              {errors.id && <InputError error={errors.id.message} />}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">비밀번호</label>
              <Input
                type="password"
                className={twMerge("h-11", errors.password && "border-red-500")}
                placeholder="영문, 숫자 포함 6자 이상"
                {...register("password", {
                  required: ERROR_MSG_INPUT_REQUIRED,
                  minLength: {
                    value: 6,
                    message: ERROR_MSG_PASSWORD,
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
                    message: ERROR_MSG_PASSWORD,
                  },
                })}
              />
              {errors.password && (
                <InputError error={errors.password.message} />
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">비밀번호 확인</label>
              <Input
                type="password"
                className={twMerge(
                  "h-11",
                  errors.password_confirm && "border-red-500",
                )}
                placeholder="영문, 숫자 포함 6자 이상"
                {...register("password_confirm", {
                  required: ERROR_MSG_INPUT_REQUIRED,
                  minLength: {
                    value: 6,
                    message: ERROR_MSG_PASSWORD,
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
                    message: ERROR_MSG_PASSWORD,
                  },
                  validate: (value) =>
                    value === passwordValue || ERROR_MSG_PASSWORD_CONFIRM,
                })}
              />
              {errors.password_confirm && (
                <InputError error={errors.password_confirm.message} />
              )}
            </div>

            {/** 약관 체크박스 영역 */}
            <div className="flex flex-col gap-2 text-sm">
              <Checkbox
                type="checkbox"
                {...register("allChecked", {
                  onChange: onChangeAllCheckbox,
                })}
              >
                <span className="font-bold">모두 동의</span>
              </Checkbox>

              <Checkbox
                type="checkbox"
                {...register("privacy", {
                  required: true,
                })}
              >
                (필수) 개인정보 수집 및 이용 동의
              </Checkbox>

              <Checkbox
                type="checkbox"
                {...register("terms", {
                  required: true,
                })}
              >
                (필수) 이용약관 동의
              </Checkbox>

              <Checkbox type="checkbox" {...register("marketing")}>
                (선택) 마케팅 정보 수신 동의
              </Checkbox>
            </div>

            {/** 회원가입 버튼 */}
            <Button
              className={twMerge(
                `h-11 border bg-gray-300 font-bold text-white`,
                isValid && "bg-slate-500",
              )}
            >
              회원가입
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default page;
