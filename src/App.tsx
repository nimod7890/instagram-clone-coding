import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ApiErrorBoundary from "src/apis/ApiErrorBoundary";
import AppRegister from "src/libraries/index";
import routes from "src/routes";

const Router = createBrowserRouter(routes);

export default function App() {
  return (
    <AppRegister>
      <ApiErrorBoundary>
        <RouterProvider router={Router} fallbackElement={null} />
      </ApiErrorBoundary>
    </AppRegister>
  );
}
