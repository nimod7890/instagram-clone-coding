import { useForm } from "react-hook-form";
import { PasswordInput } from "src/components/@common";

type PasswordInputFormProps = {
  forms: ReturnType<typeof useForm<any>>;
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
