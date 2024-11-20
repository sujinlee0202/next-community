import Image from "next/image";
import Link from "next/link";

const PopularItem = () => {
  return (
    <Link
      href={"/comment/1"}
      className="flex w-full gap-3 px-2 py-4 text-sm hover:bg-blue-50"
    >
      <div>1</div>
      <div className="flex flex-col items-start gap-1">
        <div className="flex items-center gap-2">
          <Image src="/globe.svg" alt="profile image" width={20} height={20} />
          <div>작성자</div>
          <div className="text-sm text-gray-600">프론트엔드 개발자</div>
        </div>
        <div>글 제목이 들어갈 자리입니다.</div>
      </div>
    </Link>
  );
};
export default PopularItem;
