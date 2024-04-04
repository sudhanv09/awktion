import { Component } from "solid-js";

const Indicator: Component<{schedule: 'Ongoing' | 'Scheduled' | 'Ended'}> = (props) => {
  if (props.schedule === "Ended") {
    return <span class="flex w-3 h-3 me-3 bg-red-500 rounded-full"></span>;
  } else if (props.schedule === "Scheduled") {
    return <span class="flex w-3 h-3 me-3 bg-orange-500 rounded-full"></span>;
  }
  return <span class="flex w-3 h-3 me-3 bg-green-500 rounded-full"></span>;
}

export default Indicator