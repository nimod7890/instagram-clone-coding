import { atom } from "recoil";
import { RecoilKeys } from "src/libraries/recoil";
import { UserStateType } from "src/types";

export const userState = atom<UserStateType>({
  key: RecoilKeys.User,
  default: null,
});
