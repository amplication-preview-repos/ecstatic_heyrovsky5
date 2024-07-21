export type Like = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  liker: string | null;
  likedPost: string | null;
  likerId: string | null;
  likedPostId: string | null;
};
