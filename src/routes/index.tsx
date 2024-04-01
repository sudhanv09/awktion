import { createSignal } from "solid-js";

export default function Home() {
  const [username, setUsername] = createSignal("");

  return (
    <main class="text-center flex flex-col item-center justify-center space-y-8 p-4 min-w-80 min-h-dvh">
      <h1 class="max-6-xs text-6xl font-semibold">Awktion</h1>
      <p class="">Bid smart, win big, live bold!</p>
      <div class="flex flex-col items-center justify-center space-y-6">
        <div class="space-x-4">
          {/* <label for="username">Username:</label> */}
          <input
            type="text"
            name="username"
            class="w-96 h-12 text-center bg-[#1a1a1a] text-white rounded-lg"
            placeholder="Zeus"
            value={username()}
            onChange={(event) => {
              console.log(event.target.value)
              setUsername(event.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          class="rounded-lg border-1 border-solid border-transparent p-4 font-medium bg-[#1a1a1a] cursor-pointer transition-colors hover:border-[#646cff]"
        >
          Set Username
        </button>
      </div>
    </main>
  );
}
