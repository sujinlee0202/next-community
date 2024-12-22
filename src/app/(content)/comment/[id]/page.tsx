"use client";

import { fetchGetPostById } from "@/app/api/post";
import { PostType } from "@/app/types/post";
import dayjs from "dayjs";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import "dayjs/locale/ko"; // 한국어 로케일 추가
import LikeButton from "@/app/components/LikeButton";

dayjs.locale("ko"); // 한국어 로케일 설정
interface CommentPageProps {
  params: Promise<{ id: number }>;
}

const page = ({ params }: CommentPageProps) => {
  const [post, setPost] = useState<PostType>();
  const { id } = use(params);

  useEffect(() => {
    fetchGetPostById(id).then((res) => setPost(res.post));
  }, []);

  if (!post) return null;

  return (
    <article className="border-b py-10">
      <div className="flex items-center gap-3">
        <Image src="/globe.svg" alt="profile image" width={40} height={40} />
        <div className="text-sm">
          <div className="font-bold">{post.author.username}</div>
          <div className="text-gray-600">{post.author.job}</div>
        </div>
      </div>

      <p className="py-5 font-bold">{post?.title}</p>

      <pre className="relative mb-5 whitespace-pre-wrap font-pretendard">
        {post.content}
      </pre>

      <div className="flex flex-col gap-1 text-sm text-slate-600">
        <div>{dayjs(post.createdAt).format("YYYY년 MM월 DD일 A hh:mm")}</div>
        <LikeButton postId={post.id} likes={post.likes} />
      </div>
    </article>
  );
};
export default page;
