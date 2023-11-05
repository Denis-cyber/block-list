import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiLink } from "@/shared/ui/ui-link";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { UiHeader } from "@/shared/ui/ui-header";
import { SignOutButton } from "@/features/auth";
import { useSessionQuery } from "@/entities/session";

export function HomePage() {
  const { data } = useSessionQuery();

  return (
    <main className={`min-h-screen`}>
      <UiHeader
        right={
          <div>
            {data?.email}
            <SignOutButton />
          </div>
        }
      />
      <UiButton variant="primary">Hey</UiButton>
      <UiButton variant="secondary">Hey</UiButton>
      <UiButton variant="outlined">Sign Out</UiButton>
      <UiButton disabled variant="primary">
        Sign Out
      </UiButton>
      <UiTextField
        label="Text field"
        inputProps={{ placeholder: "Enter exail ..." }}
      />
      <UiTextField
        error="Text field"
        inputProps={{ placeholder: "Enter exail ..." }}
      />
      <UiTextField inputProps={{ placeholder: "Enter exail ..." }} />
      <UiSelectField
        selectProps={{ placeholder: "Enter exail ..." }}
        options={[{ value: "Pavel Topsky", label: "YungRussia" }]}
      />

      <UiLink href={"/"}>Some text</UiLink>
      <UiSpinner className="text-teal-600 w-20 h-20" />
    </main>
  );
}
