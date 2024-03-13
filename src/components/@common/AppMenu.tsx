import { NavIconButton, IconButton } from "src/components/@common";
import RoutePath from "src/routes/routePath";

export default function AppMenu() {
  return (
    <>
      <NavIconButton icon="home" to={RoutePath.Home} />
      <NavIconButton icon="send" to={RoutePath.DirectMessage} />
      <IconButton icon="plus-square" />
      <NavIconButton icon="heart" />
    </>
  );
}
