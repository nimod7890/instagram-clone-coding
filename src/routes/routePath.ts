const enum RoutePath {
  Index = "/",
  Home = "/",

  Signin = "/signin",
  Signup = "/signup",
  Signout = "/signout",

  DirectMessage = "/direct",
  Notification = "/notifications",

  User = "/:loginId",
}

export default RoutePath;

export function getUserPagePath(id: string) {
  return RoutePath.User.replace(":loginId", String(id));
}
