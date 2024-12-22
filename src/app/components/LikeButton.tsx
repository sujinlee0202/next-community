"use client";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { fetchGetPostById, fetchLike, fetchRemoveLike } from "../api/post";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuth from "../hooks/useAuth";
import { twMerge } from "tailwind-merge";
import { PostType } from "../types/post";

interface LikeButtonProps {
  postId: number;
  likes: any[];
}

const LikeButton = ({ postId, likes }: LikeButtonProps) => {
  const [isLike, setIsLike] = useState(false);
  const [likesCount, setLikesCount] = useState(likes.length);
  const [post, setPost] = useState<PostType>();

  const router = useRouter();
  const { user, isLogin } = useAuth();

  useEffect(() => {
    fetchGetPostById(postId).then((res) => setPost(res.post));
  }, []);

  useEffect(() => {
    if (user && post) {
      const isLike = post.likes.some((like) => like.userId === user.id);
      setIsLike(isLike);
    }
  }, [user, post]);

  const handleIsLike = async () => {
    if (isLogin === "false" || isLogin === "") {
      router.push("/auth/login");
      return;
    }

    if (isLike) {
      await fetchRemoveLike(user.id, postId);
      setLikesCount((prev) => prev - 1);
    } else {
      await fetchLike(user.id, postId);
      setLikesCount((prev) => prev + 1);
    }

    setIsLike((prev) => !prev);
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
      <span>{likesCount}</span>
    </button>
  );
};

export default LikeButton;
