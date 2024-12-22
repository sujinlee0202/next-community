export type PostType = {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: string;
  author: {
    username: string;
    job?: string;
  };
  likes: any[];
};
