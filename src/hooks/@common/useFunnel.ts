import { useState } from "react";

export default function useFunnel() {
  const [step, setStep] = useState<number>(0);

  const handlePrevStep = () => setStep((prevStep) => prevStep - 1);
  const handleNextStep = () => setStep((prevStep) => prevStep + 1);

  return { step, handlePrevStep, handleNextStep };
}
