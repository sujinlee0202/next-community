import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    // Authorization: `Bearer Your_Token`
    "Content-Type": "application/json",
  },
});
