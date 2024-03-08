import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

export default function RecoilSetting({ children }: PropsWithChildren) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
