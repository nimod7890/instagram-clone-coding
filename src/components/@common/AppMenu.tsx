import { NavIconButton, IconButton } from "src/components/@common";
import { CreatePostModal } from "src/components/modal";
import { useModal } from "src/hooks/@common";
import RoutePath from "src/routes/routePath";

export default function AppMenu() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <NavIconButton icon="home" to={RoutePath.Home} />
      <NavIconButton icon="send" to={RoutePath.DirectMessage} />
      <IconButton icon="plus-square" onClick={open} />
      <NavIconButton icon="heart" />
      <CreatePostModal isOpen={isOpen} close={close} />
    </>
  );
}
