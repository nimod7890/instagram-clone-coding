import { UseFormReturn } from "react-hook-form";
import { SignInUpLayout } from "src/components/auth";
import { useSignupPage } from "src/hooks/page";
import type { SignupFormInput } from "src/hooks/page/useSignupPage";

export type FunnelStepProps = {
  forms: UseFormReturn<SignupFormInput>;

  onPrevStep?: () => void;
  onNextStep?: () => void;
  onSubmit?: () => Promise<void> | undefined;
};

export default function SignupPage() {
  const { forms, CurrentStep, handlePrevStep, handleNextStep, handleSubmit } =
    useSignupPage();

  return (
    <SignInUpLayout>
      <CurrentStep
        forms={forms}
        onPrevStep={handlePrevStep}
        onNextStep={handleNextStep}
        onSubmit={handleSubmit}
      />
    </SignInUpLayout>
  );
}

/** utils */
