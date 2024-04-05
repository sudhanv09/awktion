import Indicator from "./Indicator";
import { Component, Show } from "solid-js";
import { A } from "@solidjs/router";

const ExhibitCard: Component<{ exhibit: ExhibitList }> = (props) => {
  return (
    <div class="w-1/2 grid grid-cols-2">
      Exhibit
      <div class="flex flex-col space-y-4">
        <div class="text-left space-y-4">
          <h1 class="text-3xl">{props.exhibit.Name}</h1>
          <p class="font-thin">{props.exhibit.Description}</p>
        </div>

        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <Indicator schedule={props.exhibit.Schedule} />
            <p class="font-bold">{props.exhibit.Schedule}</p>
          </div>

          <p class="font-thin">{props.exhibit.DatePosted}</p>
          <Show when={props.exhibit.Schedule === "Ongoing"}>
            <div class="flex items-center space-x-2">
              <p>{props.exhibit.Participants}</p>
              <svg
                class="w-6"
                fill="#000000"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path>
                </g>
              </svg>
            </div>
          </Show>
        </div>

        <A
          class="rounded-lg border-1 border-solid border-transparent p-4 font-medium bg-[#1a1a1a] disabled:bg-neutral-500"
          href={`/room/${props.exhibit.Id}`}
        >
          View
        </A>
      </div>
    </div>
  );
};

export default ExhibitCard;
