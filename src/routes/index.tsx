import { useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import { isServer } from "solid-js/web";

export default function Home() {
  const [username, setUsername] = createSignal(
    !isServer ? localStorage.getItem("user"): ""
  );
  console.log(username())

  const nav = useNavigate();

  const registerUser = () => {
    localStorage.setItem("user", JSON.stringify(username()));
    nav("/listings", { replace: true });
  };

  return (
    <main class="text-center flex flex-col item-center justify-center space-y-8 p-4 min-w-80 min-h-dvh">
      <h1 class="max-6-xs text-6xl font-semibold">Awktion</h1>
      <p class="">Bid smart, win big, live bold!</p>
      <div class="flex flex-col items-center justify-center space-y-6">
        <div class="space-x-4">
          <input
            type="text"
            name="username"
            class="w-96 h-12 text-center bg-[#1a1a1a] text-white rounded-lg"
            placeholder="Username"
            value={username()}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          class="rounded-lg border-1 border-solid border-transparent p-4 font-medium bg-[#1a1a1a] cursor-pointer transition-colors hover:border-[#646cff]"
          onClick={registerUser}
        >
          Enter
        </button>
      </div>
    </main>
  );
}
