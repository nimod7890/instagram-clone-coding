import { useForm } from "react-hook-form";
import {
  BasicInfoStep,
  BirthdayStep,
  TermsAgreementStep,
} from "src/components/auth/signup";
import { useFunnel } from "src/hooks/@common";
import { useSignup } from "src/hooks/mutation";
import { SignupFormInput } from "src/types";

const Steps = [BasicInfoStep, BirthdayStep, TermsAgreementStep];

export default function useSignupPage() {
  const { step, handleNextStep, handlePrevStep } = useFunnel();

  const forms = useForm<SignupFormInput>({
    mode: "onChange",
    defaultValues: {
      loginId: "",
      password: "",
      realName: "",
      phone: "",
      birthDate: { day: 0, month: 0, year: 0 },
    },
  });

  const { handleSubmit } = forms;
  const { signup } = useSignup();

  const onSubmit = (data: SignupFormInput) => {
    signup(data);
  };

  return {
    forms,
    CurrentStep: Steps[step],
    handlePrevStep: step === 0 ? undefined : handlePrevStep,
    handleNextStep: step === 2 ? undefined : handleNextStep,
    handleSubmit: step === 2 ? handleSubmit(onSubmit) : undefined,
  };
}
