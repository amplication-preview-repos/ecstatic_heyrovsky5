export type Follow = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  follower: string | null;
  following: string | null;
  followerId: string | null;
  followingId: string | null;
};
