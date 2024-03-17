const enum RoutePath {
  Index = "/",
  Home = "/",

  Signin = "/signin",
  Signup = "/signup",
  Signout = "/signout",

  User = "/:userId",

  DirectMessage = "/direct",
  Notification = "/notifications",
}

export default RoutePath;

export function getUserPagePath(id: string) {
  return RoutePath.User.replace(":userId", String(id));
}
