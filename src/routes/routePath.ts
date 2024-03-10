const enum RoutePath {
  Index = "/",
  Home = "/",

  Signin = "/signin",
  Signup = "/signup",

  Post = "/post/:postId",
  User = "/:userId",

  DirectMessage = "/direct",
  Notification = "/notifications",
}

export default RoutePath;

export function getUserPagePath(id: string) {
  return RoutePath.User.replace(":userId", String(id));
}

export function getPostPagePath(id: number) {
  return RoutePath.Post.replace(":postId", String(id));
}
