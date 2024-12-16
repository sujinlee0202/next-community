"use client";

import Link from "next/link";
import SearchForm from "./SearchForm";
import Logo from "./Logo";
import useAuth from "../hooks/useAuth";
import Button from "./ui/Button";

const Header = () => {
  const { isLogin } = useAuth();

  return (
    <header className="h-[50px] border-b">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-2">
        {/** Logo */}
        <Logo />
        <div className="flex h-8 gap-4">
          {/** Search Form */}
          <SearchForm />

          {/** Navigate to Login Page */}
          {isLogin === null && <div></div>}
          {isLogin === "true" && (
            <Button className="button-gray button-small content-center rounded-lg border">
              로그아웃
            </Button>
          )}
          {isLogin === "" && (
            <Link
              href={"/auth/login"}
              className="button-gray button-small content-center rounded-lg border"
            >
              로그인
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
