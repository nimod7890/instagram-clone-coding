import { NavLink, useLocation } from "react-router-dom";
import { IconProps } from "src/components/@common/Icon";
import IconButton from "src/components/@common/button/IconButton";
import RoutePath from "src/routes/routePath";

type NavIconButtonProps = { to?: RoutePath | string } & IconProps;

export default function NavIconButton({
  to: path,
  icon,
  size,
}: NavIconButtonProps) {
  const { pathname } = useLocation();
  const isActive = pathname === path || pathname.startsWith(path + "/");

  if (!path) {
    return <IconButton icon={icon} size={size} color="gray900" disabled />;
  }

  return (
    <NavLink to={path}>
      <IconButton
        icon={icon}
        size={size}
        color={isActive ? "gray900" : "gray500"}
      />
    </NavLink>
  );
}
