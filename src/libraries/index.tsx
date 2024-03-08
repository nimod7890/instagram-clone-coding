import { PropsWithChildren } from "react";
import ReactQuerySetting from "@libraries/reactQuery/ReactQuerySetting";
import ToastSetting from "@libraries/toast/ToastSetting";
import RecoilSetting from "@libraries/recoil/RecoilSetting";

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
