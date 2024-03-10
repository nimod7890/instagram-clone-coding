import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Layout } from "src/components/layout";
import { UserPage, IndexPage, PostPage, SignupPage } from "src/pages";
import RoutePath from "src/routes/routePath";

const routes: RouteObject[] = [
  {
    path: RoutePath.Index,
    element: <Layout />,
    children: [
      { index: true, element: <IndexPage /> },
      { path: RoutePath.Post, element: <PostPage /> },
      { path: RoutePath.User, element: <UserPage /> },
      { path: RoutePath.Signup, element: <SignupPage /> },
    ],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
