"use client";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { fetchLike, fetchRemoveLike } from "../api/post";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useAuth from "../hooks/useAuth";
import { twMerge } from "tailwind-merge";

interface LikeButtonProps {
  postId: number;
  likes: any[];
}

const LikeButton = ({ postId, likes }: LikeButtonProps) => {
  const [isLike, setIsLike] = useState(false);

  const router = useRouter();
  const { user, isLogin } = useAuth();

  const handleIsLike = async () => {
    if (isLogin === "false" || isLogin === "") {
      router.push("/auth/login");
      return;
    }
    if (isLike) {
      await fetchRemoveLike(user.id, postId);
    } else {
      await fetchLike(user.id, postId);
    }
    setIsLike(!isLike);
  };

  return (
    <button
      className={twMerge("flex items-center gap-1", isLike && "text-red-500")}
      onClick={handleIsLike}
    >
      {isLike ? (
        <FaHeart className="text-base" />
      ) : (
        <FaRegHeart className="text-base" />
      )}
      <span>{likes.length}</span>
    </button>
  );
};
export default LikeButton;
