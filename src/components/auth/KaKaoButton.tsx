import KakaoLogo from "src/assets/kakao.svg";
import { Button } from "src/components/@common";

export default function KaKaoButton() {
  return (
    <Button variant="kakao">
      <img src={KakaoLogo} alt="카카오 로고" style={{ paddingRight: "4px" }} />{" "}
      카카오 로그인
    </Button>
  );
}
