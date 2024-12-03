import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex text-xl font-bold">
      DEV<p className="text-orange-500">＊</p>TOGETHER
    </Link>
  );
};
export default Logo;
