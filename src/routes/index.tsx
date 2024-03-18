import { RouteObject } from "react-router-dom";
import AuthenticatedLayout from "src/components/layout";
import {
  DirectMessagePage,
  HomePage,
  SigninPage,
  SignupPage,
  UserPage,
  SignOutNavPage,
} from "src/pages";
import RoutePath from "src/routes/routePath";

const routes: RouteObject[] = [
  {
    path: RoutePath.Index,
    element: <AuthenticatedLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: RoutePath.DirectMessage, element: <DirectMessagePage /> },
      {
        path: RoutePath.User,
        element: <UserPage />,
        children: [
          { index: true, element: <>user</> },
          { path: RoutePath.UserBookMark, element: <>user bookmark</> },
          { path: RoutePath.UserLike, element: <>user like</> },
        ],
      },
    ],
  },
  { path: RoutePath.Signout, element: <SignOutNavPage /> },
  { path: RoutePath.Signin, element: <SigninPage /> },
  { path: RoutePath.Signup, element: <SignupPage /> },
  // Todo: 404 not found page
  { path: "*", element: <>404</> },
];

export default routes;
