import { Suspense } from "react";
import { RouteObject } from "react-router-dom";
import AuthenticatedLayout from "src/components/layout";
import PageLoading from "src/components/layout/PageLoading";
import {
  DirectMessagePage,
  HomePage,
  SigninPage,
  SignupPage,
  UserPage,
  SignOutNavPage,
  UserPostPage,
  UserBookmarkPage,
  UserLikePage,
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
          {
            index: true,
            element: (
              <Suspense fallback={<PageLoading />}>
                <UserPostPage />
              </Suspense>
            ),
          },
          {
            path: RoutePath.UserBookMark,
            element: (
              <Suspense fallback={<PageLoading />}>
                <UserBookmarkPage />
              </Suspense>
            ),
          },
          {
            path: RoutePath.UserLike,
            element: (
              <Suspense fallback={<PageLoading />}>
                <UserLikePage />
              </Suspense>
            ),
          },
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
