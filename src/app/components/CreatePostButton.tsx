"use client";

import { BiSolidPencil } from "react-icons/bi";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";
import useAuth from "../hooks/useAuth";

const CreatePostButton = () => {
  const { isLogin } = useAuth();
  const router = useRouter();

  const handleRouteCreatePost = () => {
    if (isLogin === "true") {
      router.push("/post/create");
    } else {
      router.push("/auth/login");
    }
  };

  return (
    <Button
      onClick={handleRouteCreatePost}
      className="flex h-14 items-center justify-between rounded-full bg-slate-50 px-10 text-gray-500 hover:bg-hoverSlate"
    >
      나누고 싶은 생각이 있으신가요? <BiSolidPencil className="text-2xl" />
    </Button>
  );
};
export default CreatePostButton;
