import { useForm } from "react-hook-form";
import { PasswordInput } from "src/components/@common";
import { SigninFormInput, SignupFormInput } from "src/types";

type PasswordInputFormProps = {
  forms: ReturnType<typeof useForm<SigninFormInput & SignupFormInput>>;
};

export default function PasswordInputForm({ forms }: PasswordInputFormProps) {
  const { watch, register } = forms;

  return (
    <PasswordInput
      autoComplete="new-password"
      value={watch("password")}
      {...register("password", {
        required: true,
        minLength: 8,
        maxLength: 20,
      })}
      maxLength={20}
    />
  );
}
