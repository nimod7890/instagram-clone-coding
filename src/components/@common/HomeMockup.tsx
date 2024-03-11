import Mockup from "src/assets/home-mockup.svg";
import { useWindowSize } from "src/hooks/@common";

export default function HomeMockup() {
  const { isMobileSize } = useWindowSize();

  if (isMobileSize) {
    return null;
  }

  return <img src={Mockup} alt="홈 목업" />;
}
