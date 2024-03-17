import ProfileMenu from "./ProfileMenu";
import Dropdown from "rc-dropdown";
import { AvatarButton } from "src/components/@common";

export default function ProfileDropdown() {
  return (
    <Dropdown trigger={"click"} overlay={<ProfileMenu />}>
      <AvatarButton />
    </Dropdown>
  );
}
