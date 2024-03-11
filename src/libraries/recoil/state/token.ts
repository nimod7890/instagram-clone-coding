import { atom } from "recoil";
import { localStorageEffect } from "src/libraries/recoil";
import { StorageKeys } from "src/utils/storage";

export const tokenState = atom<string | null>({
  key: StorageKeys.Token,
  default: "",
  effects: [localStorageEffect(StorageKeys.Token)],
});
