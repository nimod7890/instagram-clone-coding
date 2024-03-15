import uuid from "react-uuid";
import { atom } from "recoil";
import { RecoilKeys, localStorageEffect } from "src/libraries/recoil";
import { UserStateType } from "src/types";
import { StorageKeys } from "src/utils/storage";

export const userState = atom<UserStateType>({
  key: `${RecoilKeys.User}${uuid()}`,
  default: null,
  effects: [localStorageEffect(StorageKeys.User)],
});
