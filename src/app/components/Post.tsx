"use client";

import Image from "next/image";
import { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { PostType } from "../types/post";
import dayjs from "dayjs";
import Link from "next/link";
import LikeButton from "./LikeButton";

const Post = ({ post }: { post: PostType }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sentences = post.content.split(/\n/);
  const displayedText = isExpanded
    ? post.content
    : sentences.slice(0, 3).join("\n") + (sentences.length > 3 ? "..." : "");

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
        <LikeButton postId={post.id} likes={post.likes} />
        <Link href={`/comment/${post.id}`} className="flex items-center gap-1">
          <FaRegCommentDots className="text-base" />
          <span>5</span>
        </Link>
      </div>
    </article>
  );
};
export default Post;
