import { Outlet } from "react-router-dom";

export default function UnAuthenticatedLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
