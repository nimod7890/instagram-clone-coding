import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAppRepository } from "src/hooks/@common";
import RoutePath from "src/routes/routePath";

export default function SignOutNavPage() {
  const { clear } = useAppRepository();

  useEffect(() => {
    clear();
  }, []);

  return <Navigate to={RoutePath.Signin} replace />;
}
