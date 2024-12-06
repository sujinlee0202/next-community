import { api } from ".";

export const fetchSignup = async (user: {
  username: string;
  email: string;
  password: string;
}) => {
  const response = await api.post("/api/users", user);
  return response.data;
};

export const fetchLogin = async (user: { email: string; password: string }) => {
  const response = await api.post("/api/auth", user);
  return response.data;
};
