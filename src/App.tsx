import { RouterProvider } from "react-router-dom";
import Router from "./routes/router";

const App = () => {
  return <RouterProvider router={Router} fallbackElement={null} />;
};
export default App;
