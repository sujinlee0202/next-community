import { api } from ".";

export const fetchCreatePost = async (post: any) => {
  const response = await api.post("/api/posts/create", post);
  return response.data;
};

export const fetchGetPost = async () => {
  const response = await api.get("/api/posts");
  return response.data;
};

export const fetchGetPostById = async (id: number) => {
  const response = await api.get(`/api/posts/${id}`);
  return response.data;
};

export const fetchLike = async (userId: number, postId: number) => {
  const response = await api.post(
    `/api/posts/likes`,
    JSON.stringify({ userId, postId }),
  );
  return response.data;
};

export const fetchRemoveLike = async (userId: number, postId: number) => {
  const response = await api.delete(`/api/posts/likes`, {
    data: JSON.stringify({ userId, postId }),
  });
  return response.data;
};
