import { atom } from "recoil";
import { StorageKeys } from "@utils/storage";
import { localStorageEffect } from "@libraries/recoil";

export const tokenState = atom<string>({
  key: StorageKeys.Token,
  default: "",
  effects: [localStorageEffect(StorageKeys.Token)],
});
