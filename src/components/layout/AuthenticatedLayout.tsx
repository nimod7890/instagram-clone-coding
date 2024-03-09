import { Outlet } from "react-router-dom";

export default function AuthenticatedLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
