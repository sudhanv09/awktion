export default function BidMessages() {
  return (
    <div>
      <div
        id="messages"
        class="flex-grow flex flex-col justify-end px-4 pt-8 pb-21 sm:pb-12 min-h-screen"
      >
        <div class="flex items-center mb-4 overflow-x-scroll">
          <div class="flex flex-col">
            <p class="text-gray-500 mb-1 text-xs ml-10">message.user</p>
            <div class="flex items-center">
              <div class="ml-2 bg-blue-800 rounded-lg p-2">
                <p class="text-white">message.message</p>
              </div>
            </div>
            <p class="text-gray-500 mt-1 text-xs ml-10">message.created_at</p>
          </div>
        </div>
      </div>
    </div>
  );
}
