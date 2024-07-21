export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  author: string | null;
  authorId: string | null;
};
