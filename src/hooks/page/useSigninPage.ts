import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useSignin } from "src/hooks/mutation";
import { SigninFormInput } from "src/types";

export default function useSigninPage() {
  const forms = useForm<SigninFormInput>({
    mode: "onSubmit",
    defaultValues: {
      loginId: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    getValues,
    clearErrors,
    formState: { errors, isSubmitted, isSubmitting },
  } = forms;

  const { signin, isPending } = useSignin();

  const onSubmit = () => {
    clearErrors();

    const [loginId, password] = getValues(["loginId", "password"]);
    signin({ loginId, password });
  };

  const errorMessage = useMemo(() => {
    const errorFields: (keyof SigninFormInput)[] = ["password", "loginId"];

    for (const field of errorFields) {
      if (errors[field]?.message) {
        return errors[field]?.message;
      }
    }

    return "";
  }, [isSubmitted, isSubmitting]);

  const disabledSubmitButton = useMemo(() => {
    const [loginId, password] = getValues(["loginId", "password"]);

    return loginId.length < 2 || password.length < 8 || isPending;
  }, [isPending, getValues(["loginId", "password"])]);

  return {
    forms,
    errorMessage,
    handleSubmit: handleSubmit(onSubmit, onSubmit),
    disabledSubmitButton,
  };
}
