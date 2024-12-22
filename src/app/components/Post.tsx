"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHeart, FaRegCommentDots, FaRegHeart } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { PostType } from "../types/post";
import dayjs from "dayjs";

const Post = ({ post }: { post: PostType }) => {
  const [isLike, setIsLike] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const sentences = post.content.split(/\n/);
  const displayedText = isExpanded
    ? post.content
    : sentences.slice(0, 3).join("\n") + (sentences.length > 3 ? "..." : "");

  const handleIsLike = () => {
    setIsLike((prev) => !prev);
  };

  const handleExpanded = () => {
    setIsExpanded(true);
  };

  return (
    <article className="border-b pb-10">
      <div className="flex items-center gap-3">
        <Image src="/globe.svg" alt="profile image" width={40} height={40} />
        <div className="text-sm">
          <div className="font-bold">{post.author.username}</div>
          {post.author.job && (
            <div className="text-gray-600">{post.author.job}</div>
          )}
          <div className="text-gray-600">
            {dayjs(post.createdAt).format("YYYY-MM-DD")}
          </div>
        </div>
      </div>

      <p className="py-5 font-bold">{post.title}</p>

      <pre className="relative mb-5 whitespace-pre-wrap font-pretendard">
        {displayedText}
        {sentences.length > 3 && !isExpanded && (
          <button onClick={handleExpanded} className="text-gray-600">
            더보기
          </button>
        )}
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
