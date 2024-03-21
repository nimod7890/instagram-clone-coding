import { Suspense } from "react";
import { RouteObject } from "react-router-dom";
import { HelperText } from "src/components/@common";
import { AuthenticatedLayout } from "src/components/layout";
import { PageLoading } from "src/components/user";
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
    path: RoutePath.ServerError,
    element: (
      <HelperText>
        서버 에러가 발생했습니다. 잠시 후 다시 시도해주세요.
      </HelperText>
    ),
  },
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
