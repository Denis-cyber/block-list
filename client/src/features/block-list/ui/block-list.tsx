import { UiTextField } from "@/shared/ui/ui-text-field";
import { useBlockItems } from "../model/use-block-items";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { BlockItem } from "./block-item";

export function BlockList({ className }: { className?: string }) {
  const { isLoading, items, q, setQ } = useBlockItems();

  return (
    <div className={className}>
      <UiTextField
        className="mb-2"
        label="Search..."
        inputProps={{ value: q, onChange: (e) => setQ(e.target.value) }}
      />

      <div className="rounded-xl bg-slate-100/50 px-10 py-6 flex flex-col gap-3">
        {isLoading ? (
          <UiSpinner className="text-teal-600 w-10 h-10 mx-auto" />
        ) : (
          items.map((item) => <BlockItem key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
}
