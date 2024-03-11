import _ from "lodash";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { tokenState } from "src/libraries/recoil";

export default function useAuthStorage() {
  const [token, setToken] = useRecoilState(tokenState);

  const isEmptyToken = _.isEmpty(token);

  const clear = useCallback(() => {
    setToken(null);
  }, [isEmptyToken]);

  return { token, isEmptyToken, setAuthData: setToken, clear };
}
