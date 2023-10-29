import { Inter } from "next/font/google";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiLink } from "@/shared/ui/ui-link";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";

const inter = Inter({ subsets: ["latin"] });

export function HomePage() {
  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
  });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {data?.email}

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
      <UiPageSpinner />
    </main>
  );
}
