import { useParams } from "@solidjs/router";
import { createSignal, onMount, Switch, Match, Show } from "solid-js";
import BidGroup from "~/components/BidButtons";
import { exhibitData } from "~/lib/data";

function filterbyId(object: ExhibitList[], id: number) {
  return object.filter((x) => x.Id === id)[0];
}

export default function Room() {
  let ws;
  const roomId = useParams();
  const data = filterbyId(exhibitData, parseInt(roomId.idx));

  const [message, setMessage] = createSignal({ message: "", prev_message: [] });

  onMount(() => {
    ws = new WebSocket("ws://localhost:3000/_ws");
    // ws.addEventListener("message", (event) => {
    //   const {user = "system", message = ""} = event.data.startsWith("{") ? JSON.parse(event.data) : {message: event.data}

    //   console.log(message)

    // })
  });

  return (
    <div class="text-center flex flex-col item-center justify-center space-y-8 p-4 min-w-80 min-h-dvh">
      <Switch>
        <Match when={data.Schedule === "Ended"}>
          <div
            class="p-4 mb-4 border-2 border-red-800 border-solid text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span class="font-medium">Bidding Closed</span>
          </div>
        </Match>
        <Match when={data.Schedule === "Scheduled"}>
          <div
            class="p-4 mb-4 border-2 border-orange-800 border-solid text-sm text-orange-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-orange-400"
            role="alert"
          >
            <span class="font-medium">Bidding Not Open Yet</span>
          </div>
        </Match>
      </Switch>

      <div class="m-8">
        {data.Image}
        <h1 class="text-3xl">{data.Name}</h1>
      </div>

      <div>
        <h1>Highest bidder: Bid</h1>
        <h1>Timer</h1>
      </div>

      <Show when={data.Schedule === "Ongoing"}>
        <BidGroup />
      </Show>
    </div>
  );
}
