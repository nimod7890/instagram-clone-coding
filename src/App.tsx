import { RouterProvider } from "react-router-dom";
import AppRegister from "@libraries/index";
import Router from "@routes/router";

const App = () => {
  return (
    <AppRegister>
      <RouterProvider router={Router} fallbackElement={null} />
    </AppRegister>
  );
};
export default App;
