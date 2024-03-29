import { lStorage } from "src/utils/storage";

export const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = lStorage.get(key);

    if (savedValue !== null) {
      setSelf(savedValue);
    }

    onSet((newValue: any, _: any, isReset: boolean) => {
      isReset || newValue === null
        ? lStorage.remove(key)
        : lStorage.set(key, newValue);
    });
  };
