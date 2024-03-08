import RoutePath from "@routes/routePath";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>요청하신 페이지를 찾을 수 없습니다.</h1>
      <br />
      <Link to={RoutePath.Index}>홈으로 돌아가기</Link>
    </div>
  );
}
