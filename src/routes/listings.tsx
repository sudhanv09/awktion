import { For, createSignal } from "solid-js";
import ExhibitCard from "~/components/ExhibitCard";
import { exhibitList } from "~/lib/data";

export default function Listings() {
  const [exhibits] = createSignal(exhibitList);

  return (
    <main class="text-center flex flex-col item-center justify-center space-y-8 p-4 min-w-80 min-h-dvh">
      <div class="flex flex-col items-center justify-center space-y-12">
        <For each={exhibits()}>
          {(item, _) => <ExhibitCard exhibits={item} />}
        </For>
      </div>
    </main>
  );
}
