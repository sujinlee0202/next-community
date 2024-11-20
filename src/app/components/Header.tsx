import Link from "next/link";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className="border-b px-10 py-2">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/** Logo */}
        <Link href={"/"} className="flex text-xl font-bold">
          DEV<p className="text-orange-500">＊</p>TOGETHER
        </Link>
        <div className="flex gap-4">
          {/** Search Form */}
          <SearchForm />

          {/** Navigate to Login Page */}
          <Link
            href={"/auth/login"}
            className="button-gray button-small content-center rounded-lg border"
          >
            로그인
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
