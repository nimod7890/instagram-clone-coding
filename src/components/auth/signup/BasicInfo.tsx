import { debounce } from "lodash";
import { checkUserIdIsExist } from "src/apis/auth";
import { Input, PasswordInput } from "src/components/@common";
import { FunnelStepProps } from "src/pages/SignupPage";

export default function BasicInfo({ forms }: FunnelStepProps) {
  const {
    watch,
    register,
    formState: { errors },
  } = forms;

  return (
    <>
      <Input
        autoComplete="off"
        type="tel"
        startIcon="mail"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        isError={Boolean(errors.phone)}
        /* placeholder와 달리 전화번호만 입력 */
        value={watch("phone")}
        {...register("phone", {
          required: true,
          pattern: {
            value: regPhoneNumber,
            message:
              "휴대폰 번호가 정확하지 않습니다. 국가번호를 포함하여 전체 전화번호를 입력해주세요.",
          },
          setValueAs: formatPhoneNumberInProgress,
          maxLength: 20,
        })}
        maxLength={20}
      />
      <Input
        autoComplete="off"
        startIcon="user"
        placeholder="성명"
        value={watch("realName")}
        {...register("realName", { required: true, maxLength: 20 })}
        maxLength={20}
      />
      <Input
        autoComplete="off"
        startIcon="settings"
        placeholder="사용자 이름"
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
            const { isExist } = await checkUserIdIsExist(loginId);
            return (
              !isExist ||
              `사용할 수 없는 사용자 이름입니다. 다른 이름을 사용하세요.`
            );
          }, 1000),
          maxLength: 20,
        })}
        maxLength={20}
      />
      <PasswordInput
        autoComplete="new-password"
        value={watch("password")}
        {...register("password", {
          required: true,
          minLength: 8,
          maxLength: 20,
        })}
        maxLength={20}
      />
    </>
  );
}

/** utils */

const regPhoneNumber = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
const regLoginId = /^[a-z0-9_.]+$/;

/**
 * 입력된 값의 길이에 따라 휴대전화 번호 형식에 맞는 string 반환
 * @param phoneNumber
 * @returns 000, 000-0, 000-00, 000-0000-0000
 */
function formatPhoneNumberInProgress(
  phoneNumber: string | null | undefined
): string {
  if (!phoneNumber) {
    return "";
  }

  const normalizedPhoneNumber = phoneNumber.replace(/[^0-9]/g, "");

  if (normalizedPhoneNumber.length <= 3) {
    return normalizedPhoneNumber;
  }

  const formattedPhoneNumberParts = [];

  if (normalizedPhoneNumber.length < 8) {
    formattedPhoneNumberParts.push(normalizedPhoneNumber.slice(0, 3));
    formattedPhoneNumberParts.push(normalizedPhoneNumber.substring(3));
  } else {
    formattedPhoneNumberParts.push(normalizedPhoneNumber.slice(0, 3));
    formattedPhoneNumberParts.push(normalizedPhoneNumber.slice(3, 7));
    formattedPhoneNumberParts.push(normalizedPhoneNumber.slice(7, 11));
  }

  return formattedPhoneNumberParts.join("-");
}

/** login id 입력을 위해 lower case text 반환 */
function convertToLowerCase(str: string): string {
  return str.replace(/[A-Z]/g, (char) => char.toLowerCase());
}
