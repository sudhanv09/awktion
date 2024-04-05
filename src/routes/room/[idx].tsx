import { useParams } from "@solidjs/router";
import { createSignal, onMount, Switch, Match, Show } from "solid-js";
import { exhibitData } from "~/lib/data";
import { isServer } from "solid-js/web";

function filterbyId(object: ExhibitList[], id: number) {
  return object.filter((x) => x.Id === id)[0];
}

export default function Room() {
  let ws;
  const roomId = useParams();
  const data = filterbyId(exhibitData, parseInt(roomId.idx));
  
  const [bid, setBid] = createSignal(1000)
  const makebid = (x: number) => {
    setBid(x)
  }

  onMount(() => {
    ws = new WebSocket("ws://localhost:3000/_ws");
    const user = localStorage.getItem("user")
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
        <img src={data.Image} alt={data.Image} />
        <h1 class="text-3xl">{data.Name}</h1>
      </div>

      <Show when={data.Schedule === "Ended"}>
        <div>
          <h1 class="text-2xl font-semibold">
            {data.HighestBidder}: {data.WinningBid}
          </h1>
        </div>
      </Show>

      <Show when={data.Schedule === "Ongoing"}>
        <div>
          <h1 class="text-2xl font-semibold">
            {data.HighestBidder}: {bid()} 
          </h1>
        </div>
        <div class="space-y-4 py-24">
          <div class="space-x-8">
            <button
              type="submit"
              class="rounded-lg border-1 border-solid border-transparent p-4 font-medium bg-[#1a1a1a] cursor-pointer transition-colors hover:border-[#646cff]"
              onClick={() => makebid(bid()*2)}
            >
              {bid() * 2}
            </button>
            <button
              type="submit"
              class="rounded-lg border-1 border-solid border-transparent p-4 font-medium bg-[#1a1a1a] cursor-pointer transition-colors hover:border-[#646cff]"
              onClick={() => makebid(bid()*5)}
            >
              {bid() * 5}
            </button>
            <button
              type="submit"
              class="rounded-lg border-1 border-solid border-transparent p-4 font-medium bg-[#1a1a1a] cursor-pointer transition-colors hover:border-[#646cff]"
              onClick={() => makebid(bid()*10)}
            >
              {bid() * 10}
            </button>
          </div>
          <input
            type="text"
            name="username"
            value={bid()}
            class="w-80 h-12 text-center bg-[#1a1a1a] text-white rounded-lg"
            placeholder="Custom Bid"
            onChange={(e) => {makebid(parseInt(e.target.value))}}
          />
        </div>
      </Show>
    </div>
  );
}
