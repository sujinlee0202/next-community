import { api } from ".";

export const fetchCreatePost = async (post: any) => {
  const response = await api.post("/api/posts/create", post);
  return response.data;
};
