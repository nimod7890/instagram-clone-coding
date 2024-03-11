import { Navigate } from "react-router-dom";
import RoutePath from "src/routes/routePath";

export default function SignOutNavPage() {
  // Todo: sign out 처리
  return <Navigate to={RoutePath.Signin} replace />;
}
