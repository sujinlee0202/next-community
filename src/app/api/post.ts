import { api } from ".";

export const fetchCreatePost = async (post: any) => {
  console.log(post);
  const response = await api.post("/api/posts/create", post);
  return response.data;
};
