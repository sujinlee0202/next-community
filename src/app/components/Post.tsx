"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHeart, FaRegCommentDots, FaRegHeart } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const Post = () => {
  const [isLike, setIsLike] = useState(false);

  const handleIsLike = () => {
    setIsLike((prev) => !prev);
  };

  return (
    <article className="border-b pb-10">
      <div className="flex items-center gap-3">
        <Image src="/globe.svg" alt="profile image" width={40} height={40} />
        <div className="text-sm">
          <div className="font-bold">김티치</div>
          <div className="text-gray-600">프론트엔드 개발자</div>
          <div className="text-gray-600">2024.11.21</div>
        </div>
      </div>

      <p className="py-5 font-bold">
        sunt aut facere repellat provident occaecati excepturi optio
        reprehenderit
      </p>

      <pre className="relative mb-5 whitespace-pre-wrap font-pretendard">
        est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea
        dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut
        reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla est
        rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea
        dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut
        reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla
        <button className="text-gray-600">...더보기</button>
      </pre>

      <div className="flex gap-3 text-sm font-bold text-slate-600">
        <button
          className={twMerge(
            "flex items-center gap-1",
            isLike && "text-red-500",
          )}
          onClick={handleIsLike}
        >
          {isLike ? (
            <FaHeart className="text-base" />
          ) : (
            <FaRegHeart className="text-base" />
          )}
          <span>123</span>
        </button>
        <Link href={"/comment/1"} className="flex items-center gap-1">
          <FaRegCommentDots className="text-base" />
          <span>5</span>
        </Link>
      </div>
    </article>
  );
};
export default Post;
