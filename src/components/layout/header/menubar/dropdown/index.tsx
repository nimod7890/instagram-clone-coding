import Dropdown from "rc-dropdown";
import AvatarButton from "src/components/layout/header/menubar/AvatarButton";
import ProfileMenu from "src/components/layout/header/menubar/dropdown/ProfileMenu";

export default function ProfileDropdown() {
  return (
    <Dropdown trigger={"click"} overlay={<ProfileMenu />}>
      <AvatarButton />
    </Dropdown>
  );
}
