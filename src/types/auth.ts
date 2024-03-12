import { useForm } from "react-hook-form";
import { DateSelectFormType } from "src/types";

export type SigninFormInput = {
  loginId: string;
  password: string;
};

export type SignupFormInput = SigninFormInput & {
  realName: string;
  phone: string;
  birthDate: DateSelectFormType;
};

export type FunnelStepProps = {
  forms: ReturnType<typeof useForm<SignupFormInput>>;

  onPrevStep?: () => void;
  onNextStep?: () => void;
  onSubmit?: () => Promise<void> | undefined;
};
