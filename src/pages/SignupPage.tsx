import { useState } from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import { SignInUpLayout } from "src/components/auth";
import {
  BasicInfoStep,
  BirthdayStep,
  TermsAgreementStep,
} from "src/components/auth/signup";

export type FunnelStepProps = {
  forms: UseFormReturn<SignupFormInput, any, undefined>;

  onPrevStep?: () => void;
  onNextStep?: () => void;
  onSubmit?: () => void | undefined;
};

export default function SignupPage() {
  const [step, setStep] = useState<number>(0);

  const forms = useForm({
    mode: "onChange",
    defaultValues: defaultFormInput,
  });

  const CurrentStep = Steps[step];

  const handlePrevStep = () => setStep((prevStep) => prevStep - 1);
  const handleNextStep = () => setStep((prevStep) => prevStep + 1);
  const handleSubmit = () => {};

  return (
    <SignInUpLayout>
      <CurrentStep
        forms={forms}
        onPrevStep={step === 0 ? undefined : handlePrevStep}
        onNextStep={step === 2 ? undefined : handleNextStep}
        onSubmit={step === 2 ? handleSubmit : undefined}
      />
    </SignInUpLayout>
  );
}

/** utils */

const Steps = [BasicInfoStep, BirthdayStep, TermsAgreementStep];

export type SignupFormInput = {
  loginId: string;
  password: string;
  realName: string;
  phone: string;
  birthDate: string;
};

const defaultFormInput: SignupFormInput = {
  loginId: "",
  password: "",
  realName: "",
  phone: "",
  birthDate: "",
};
