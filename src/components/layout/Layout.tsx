import AuthenticatedLayout from "src/components/layout/AuthenticatedLayout";
import UnAuthenticatedLayout from "src/components/layout/UnAuthenticatedLayout";

export default function Layout() {
  const isAuthenticated: boolean = true;

  return isAuthenticated ? <UnAuthenticatedLayout /> : <AuthenticatedLayout />;
}
