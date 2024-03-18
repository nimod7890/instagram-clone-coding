import { DeferredWrapper, HelperText } from "src/components/@common";

export default function PageLoading() {
  return (
    <DeferredWrapper>
      <HelperText>불러오는 중 ...</HelperText>
    </DeferredWrapper>
  );
}
