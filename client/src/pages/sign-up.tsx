import { SignUpForm } from "@/features/auth";
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";
import { UiHeader } from "@/shared/ui/ui-header";

export function SignUpPage() {
  return (
    <UiFormPageLayout
      title="Sign Up"
      form={<SignUpForm />}
      header={<UiHeader />}
    />
  );
}
