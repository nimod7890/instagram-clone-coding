import { PropsWithChildren } from "react";
import ReactQuerySetting from "src/libraries/reactQuery/ReactQuerySetting";
import RecoilSetting from "src/libraries/recoil/RecoilSetting";
import ToastSetting from "src/libraries/toast/ToastSetting";

export default function AppRegister({ children }: PropsWithChildren) {
  return (
    <RecoilSetting>
      <ReactQuerySetting>
        {children}
        <ToastSetting />
      </ReactQuerySetting>
    </RecoilSetting>
  );
}
