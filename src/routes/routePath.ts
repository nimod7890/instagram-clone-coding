const RoutePath = {
  Index: "/",
  Home: "/",
  Login: "/",

  Signup: "/signup",
  User: "/:userId",
  Post: "/post/:postId",
} as const;

export default RoutePath;

export function getUserPagePath(id: string) {
  return RoutePath.User.replace(":userId", String(id));
}

export function getPostPagePath(id: number) {
  return RoutePath.Post.replace(":postId", String(id));
}
