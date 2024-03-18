import { NavIconButton, IconButton } from "src/components/@common";
import { CreatePostModal } from "src/components/modal";
import { useAppRepository, useModal } from "src/hooks/@common";
import RoutePath, { getUserLikePagePath } from "src/routes/routePath";

export default function AppMenu() {
  const { userData } = useAppRepository();

  if (!userData) {
    return null;
  }

  const { isOpen, open, close } = useModal();

  return (
    <>
      <NavIconButton icon="home" to={RoutePath.Home} />
      <NavIconButton icon="send" to={RoutePath.DirectMessage} />
      <IconButton icon="plus-square" onClick={open} />
      <NavIconButton icon="heart" to={getUserLikePagePath(userData.loginId)} />
      <CreatePostModal isOpen={isOpen} close={close} />
    </>
  );
}
