import { ReactComponent as LogoSvg } from "src/assets/logo.svg";

export default function Logo(props: React.SVGProps<SVGSVGElement>) {
  return <LogoSvg {...props} />;
}
