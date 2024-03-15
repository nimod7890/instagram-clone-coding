import uuid from "react-uuid";
import { atom } from "recoil";
import { RecoilKeys, localStorageEffect } from "src/libraries/recoil";
import { StorageKeys } from "src/utils/storage";

export const tokenState = atom<string | null>({
  key: `${RecoilKeys.Token}${uuid()}`,
  default: "",
  effects: [localStorageEffect(StorageKeys.Token)],
});
