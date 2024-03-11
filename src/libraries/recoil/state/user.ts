import { atom } from "recoil";
import { RecoilKeys } from "src/libraries/recoil";
import { UserType } from "src/types";

export const userState = atom<UserType | null>({
  key: RecoilKeys.User,
  default: null,
});
