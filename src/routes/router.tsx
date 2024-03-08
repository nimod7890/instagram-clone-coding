import { RouteObject, createBrowserRouter } from "react-router-dom";
import RoutePath from "@routes/routePath";
import NotFoundPage from "@pages/NotFoundPage";

const routes: RouteObject[] = [
  {
    path: RoutePath.Index,
    element: <>index page</>,
  },
  { path: "*", element: <NotFoundPage /> },
];

const Router = createBrowserRouter(routes);

export default Router;
