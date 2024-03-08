import { RouteObject, createBrowserRouter } from "react-router-dom";
import NotFoundPage from "src/pages/NotFoundPage";
import RoutePath from "src/routes/routePath";

const routes: RouteObject[] = [
  {
    path: RoutePath.Index,
    element: <>index page</>,
  },
  { path: "*", element: <NotFoundPage /> },
];

const Router = createBrowserRouter(routes);

export default Router;
