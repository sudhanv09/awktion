import { useParams } from "@solidjs/router";
import { createSignal } from "solid-js";
import { exhibitData } from "~/lib/data";
import BidBar from "~/components/Room/BidBar";
import BidMessages from "~/components/Room/BidMessages";
import BidSidebar from "~/components/Room/BidSidebar";

function filterById(exhibits: ExhibitList[], id: number) {
  return exhibits.filter(function (exhibit) {
    return exhibit.Id == id;
  })[0];
}

export default function Room() {
  const params = useParams();
  const roomdata = filterById(exhibitData, parseInt(params.idx));
  const data = createSignal(roomdata);

  return (
    <div class="w-full h-screen flex justify-between">
      <div class="w-2/3">
        <BidMessages />
        <BidBar /> 
      </div>
      <div class="w-1/3">
        <BidSidebar />
      </div>

    </div>
  );
}
