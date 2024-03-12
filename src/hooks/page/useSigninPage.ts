import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useSignin } from "src/hooks/mutation";
import { SigninFormInput } from "src/types";

export default function useSigninPage() {
  const forms = useForm<SigninFormInput>({
    mode: "onChange",
    defaultValues: {
      loginId: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = forms;

  const { signin } = useSignin();

  const onSubmit = async (data: SigninFormInput) => signin(data);

  const errorMessage = useMemo(() => {
    const errorFields: (keyof SigninFormInput)[] = ["password", "loginId"];

    for (const field of errorFields) {
      if (errors[field]?.message) {
        return errors[field]?.message;
      }
    }

    return "";
  }, [errors.password, errors.loginId]);

  return { forms, errorMessage, handleSubmit: handleSubmit(onSubmit) };
}
