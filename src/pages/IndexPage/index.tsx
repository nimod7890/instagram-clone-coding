import HomePage from "src/pages/IndexPage/HomePage";
import LoginPage from "src/pages/IndexPage/LoginPage";

export default function IndexPage() {
  const isAuthenticated: boolean = true;

  return isAuthenticated ? <HomePage /> : <LoginPage />;
}
