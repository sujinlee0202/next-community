"use client";

import { fetchGetPost } from "@/app/api/post";
import CreatePostButton from "@/app/components/CreatePostButton";
import Post from "@/app/components/Post";
import { PostType } from "@/app/types/post";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [posts, setPosts] = useState<PostType[]>();

  useEffect(() => {
    fetchGetPost().then((res) => setPosts(res.post));
  }, []);

  return (
    <div className="mr-5 flex flex-col gap-10 pt-5">
      <CreatePostButton />
      {posts?.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};
export default HomePage;
