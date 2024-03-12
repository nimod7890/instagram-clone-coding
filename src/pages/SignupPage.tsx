import { useState } from "react";
import { SignInUpLayout } from "src/components/auth";
import BasicInfoStep from "src/components/auth/signup/BasicInfoStep";
import BirthdayStep from "src/components/auth/signup/BirthdayStep";
import TermsAgreementStep from "src/components/auth/signup/TermsAgreementStep";

const Steps = [BasicInfoStep, BirthdayStep, TermsAgreementStep];

export type FunnelStepProps = {
  onPrevStep?: () => void;
  onNextStep?: () => void;
  onSubmit?: () => void | undefined;
};

export default function SignupPage() {
  const [step, setStep] = useState<number>(0);

  const CurrentStep = Steps[step];

  const handlePrevStep = () => setStep((prevStep) => prevStep - 1);
  const handleNextStep = () => setStep((prevStep) => prevStep + 1);
  const handleSubmit = () => {};

  return (
    <SignInUpLayout>
      <CurrentStep
        onPrevStep={step === 0 ? undefined : handlePrevStep}
        onNextStep={step === 2 ? undefined : handleNextStep}
        onSubmit={step === 2 ? handleSubmit : undefined}
      />
    </SignInUpLayout>
  );
}
