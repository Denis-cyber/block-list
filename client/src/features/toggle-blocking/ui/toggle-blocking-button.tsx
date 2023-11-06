import { UiButton } from "@/shared/ui/ui-button";
import { useToggleBlocking } from "../model/use-toggle-blocking";

export function ToggleBlockingButton({}) {
  const { isBlockingEnabled, isPending, toggleBlocking, isReady } =
    useToggleBlocking();

  if (!isReady) return null;

  return (
    <UiButton
      onClick={toggleBlocking}
      disabled={isPending}
      variant={isBlockingEnabled ? "secondary" : "primary"}
    >
      {isBlockingEnabled ? "Disable Blocking" : "Enable Blocking"}
    </UiButton>
  );
}
