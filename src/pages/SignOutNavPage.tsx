import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAppRepository, useAuthStorage } from "src/hooks/@common";
import RoutePath from "src/routes/routePath";

export default function SignOutNavPage() {
  const { clear: appRepositoryClear } = useAppRepository();
  const { clear: authStorageClear } = useAuthStorage();

  useEffect(() => {
    appRepositoryClear();
    authStorageClear();
  }, []);

  return <Navigate to={RoutePath.Signin} replace />;
}
