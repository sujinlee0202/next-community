import { api } from ".";

export const fetchSignup = async (user: {
  username: string;
  email: string;
  password: string;
}) => {
  console.log(user);
  const response = await api.post("/api/users", user);
  return response.data;
};
