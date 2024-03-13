import _ from "lodash";
import { useRecoilState } from "recoil";
import { tokenState } from "src/libraries/recoil";

export default function useAuthStorage() {
  const [token, setToken] = useRecoilState(tokenState);

  const isEmptyToken = _.isEmpty(token);

  const clear = () => setToken(null);

  return { token, isEmptyToken, setAuthData: setToken, clear };
}
