import Link from "next/link";
import { BiSolidPencil } from "react-icons/bi";

const CreatePostButton = () => {
  return (
    <Link
      href={"/post/create"}
      className="hover:bg-hoverSlate flex h-14 items-center justify-between rounded-full bg-slate-50 px-10 text-gray-500"
    >
      나누고 싶은 생각이 있으신가요? <BiSolidPencil className="text-2xl" />
    </Link>
  );
};
export default CreatePostButton;
