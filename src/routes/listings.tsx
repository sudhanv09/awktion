import { For, createSignal } from "solid-js";
import ExhibitCard from "~/components/ExhibitCard";
import { exhibitData } from "~/lib/data";

export default function Listings() {
  const [exhibits] = createSignal<ExhibitList[]>(exhibitData);

  return (
    <main class="text-center flex flex-col item-center justify-center space-y-8 p-4 min-w-80 min-h-dvh">
      <div class="flex flex-col items-center justify-center space-y-12">
        <For each={exhibits()}>
          {(item, _) => <ExhibitCard exhibit={item} />}
        </For>
      </div>
    </main>
  );
}
