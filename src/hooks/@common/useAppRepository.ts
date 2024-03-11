import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { userState } from "src/libraries/recoil/state/user";
import { UserType } from "src/types";

export default function useAppRepository() {
  const [userDataState, setUserDataState] = useRecoilState(userState);

  const syncRepository = useCallback(
    ({ userData }: { userData?: UserType }) => {
      if (userData) {
        setUserDataState(userData);
      }
    },
    [setUserDataState]
  );

  const clear = useCallback(() => {
    setUserDataState(null);
  }, [setUserDataState]);

  return {
    userData: userDataState,
    syncRepository,
    clear,
  };
}

export type UseAppRepositoryType = ReturnType<typeof useAppRepository>;
