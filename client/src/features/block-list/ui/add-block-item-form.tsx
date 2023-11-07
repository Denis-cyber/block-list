import { UiSelectField } from "@/shared/ui/ui-select-field";
import { useAddBlockItemForm } from "../model/use-add-block-item-form";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiButton } from "@/shared/ui/ui-button";

export function AddBlockItemForm() {
  const { handleSubmit, isPending, register, type } = useAddBlockItemForm();

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <UiSelectField
        className="grow min-w-[200px]"
        selectProps={{ ...register("type") }}
      />
      <UiTextField
        className="grow"
        inputProps={{
          placeholder:
            type === "KeyWord" ? "Enter Key Word..." : "Enter WebSite",
          ...register("data"),
        }}
      />
      <UiButton variant="primary" disabled={isPending}>
        Add Block Item
      </UiButton>
    </form>
  );
}