import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { useAuthStorage } from "src/hooks/@common";
import { userState } from "src/libraries/recoil/state/user";
import { UserStateType } from "src/types";

export default function useAppRepository() {
  const [userDataState, setUserDataState] = useRecoilState(userState);
  const { clear: clearAuthStorage } = useAuthStorage();

  const syncRepository = useCallback(
    ({ userData }: { userData?: UserStateType }) => {
      if (userData) {
        setUserDataState(userData);
      }
    },
    [setUserDataState]
  );

  const clear = useCallback(() => {
    setUserDataState(null);
    clearAuthStorage();
  }, [setUserDataState]);

  return {
    userData: userDataState,
    syncRepository,
    clear,
  };
}

export type UseAppRepositoryType = ReturnType<typeof useAppRepository>;
