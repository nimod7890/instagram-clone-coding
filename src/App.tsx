import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ApiErrorBoundary from "src/apis/ApiErrorBoundary";
import { GlobalLoading } from "src/components/layout";
import AppRegister from "src/libraries";
import routes from "src/routes";

const Router = createBrowserRouter(routes);

export default function App() {
  return (
    <AppRegister>
      <ApiErrorBoundary>
        <RouterProvider router={Router} fallbackElement={<GlobalLoading />} />
      </ApiErrorBoundary>
    </AppRegister>
  );
}
