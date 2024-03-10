import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppRegister from "src/libraries/index";
import routes from "src/routes";

const Router = createBrowserRouter(routes);

export default function App() {
  return (
    <AppRegister>
      <RouterProvider router={Router} fallbackElement={null} />
    </AppRegister>
  );
}
