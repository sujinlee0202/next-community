import CreatePostButton from "@/app/components/CreatePostButton";
import Post from "@/app/components/Post";

const HomePage = () => {
  return (
    <div className="mr-5 flex flex-col gap-10 pt-5">
      <CreatePostButton />
      <Post />
    </div>
  );
};
export default HomePage;
