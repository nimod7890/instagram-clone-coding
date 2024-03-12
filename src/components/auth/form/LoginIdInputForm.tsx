import { debounce } from "lodash";
import { useForm } from "react-hook-form";
import { checkUserIdIsExist } from "src/apis/auth";
import { Input } from "src/components/@common";

type LoginIdInputFormProps = {
  isSignInPage?: boolean;
  forms: ReturnType<typeof useForm<any>>;
};

export default function LoginIdInputForm({
  isSignInPage = false,
  forms,
}: LoginIdInputFormProps) {
  const {
    watch,
    register,
    formState: { errors },
  } = forms;

  return (
    <Input
      autoComplete="off"
      startIcon="settings"
      placeholder={
        isSignInPage ? "전화번호, 사용자 이름 또는 이메일" : "사용자 이름"
      }
      isError={Boolean(errors.loginId)}
      value={watch("loginId")}
      {...register("loginId", {
        required: true,
        setValueAs: convertToLowerCase,
        pattern: {
          value: regLoginId,
          message:
            "사용자 이름에는 문자(영문), 숫자, 밑줄 및 마침표만 사용할 수 있습니다.",
        },
        validate: debounce(async (loginId) => {
          if (isSignInPage) {
            return true;
          }

          const { isExist } = await checkUserIdIsExist(loginId);
          return (
            !isExist ||
            `사용할 수 없는 사용자 이름입니다. 다른 이름을 사용하세요.`
          );
        }, 2000),
        maxLength: 20,
      })}
      maxLength={20}
    />
  );
}

/** utils */

const regLoginId = /^[a-z0-9_.]+$/;

/** login id 입력을 위해 lower case text 반환 */
function convertToLowerCase(str: string): string {
  return str.replace(/[A-Z]/g, (char) => char.toLowerCase());
}
