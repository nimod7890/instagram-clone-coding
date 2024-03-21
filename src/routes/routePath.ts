const enum RoutePath {
  Index = "/",
  Home = "/",

  Signin = "/signin",
  Signup = "/signup",
  Signout = "/signout",

  DirectMessage = "/direct",
  Notification = "/notifications",

  User = "/:loginId",
  UserPost = "/:loginId",
  UserLike = "/:loginId/like",
  UserBookMark = "/:loginId/bookmark",

  ServerError = "/error/500",
  NotFoundError = "/error/404",
}

export default RoutePath;

export function getUserPagePath(id: string) {
  return RoutePath.User.replace(":loginId", String(id));
}

export function getUserLikePagePath(id: string) {
  return RoutePath.UserLike.replace(":loginId", String(id));
}

export function getUserBookMarkPagePath(id: string) {
  return RoutePath.UserBookMark.replace(":loginId", String(id));
}
