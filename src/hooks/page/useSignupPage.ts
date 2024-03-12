import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  BasicInfoStep,
  BirthdayStep,
  TermsAgreementStep,
} from "src/components/auth/signup";
import { useSignup } from "src/hooks/mutation";
import { SignupFormInput } from "src/types";

const Steps = [BasicInfoStep, BirthdayStep, TermsAgreementStep];

export default function useSignupPage() {
  const [step, setStep] = useState<number>(0);

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

  const onSubmit = async (data: SignupFormInput) => {
    signup(data);
  };

  const CurrentStep = Steps[step];

  const handlePrevStep = () => setStep((prevStep) => prevStep - 1);
  const handleNextStep = () => setStep((prevStep) => prevStep + 1);

  return {
    forms,
    CurrentStep,
    handlePrevStep: step === 0 ? undefined : handlePrevStep,
    handleNextStep: step === 2 ? undefined : handleNextStep,
    handleSubmit: step === 2 ? handleSubmit(onSubmit) : undefined,
  };
}
