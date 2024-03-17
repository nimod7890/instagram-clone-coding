export type UserType = {
  id: number;
  loginId: string;
};

export type UserProfileType = UserType & {
  realName: string;
  followerCount: number;
  followingCount: number;
  feedCount: number;
};

export type UserStateType = (UserType & Partial<UserProfileType>) | null;
