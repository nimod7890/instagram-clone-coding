import { SignInUpLayout } from "src/components/auth";
import { useSignupPage } from "src/hooks/page";

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
