import { toast } from "react-toastify";

export function showToastPromise(
  promise: Promise<unknown> | undefined,
  arg1: string
): void {
  if (!promise) {
    return;
  }

  toast.promise(promise, {
    pending: `${arg1} 중...`,
    success: `${arg1} 완료!`,
    error: `${arg1} 실패`,
  });
}
