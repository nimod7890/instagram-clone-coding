import { ReactComponent as LogoSvg } from "src/assets/logo.svg";

export default function Logo({
  width = "140",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return <LogoSvg width={width} {...props} />;
}
