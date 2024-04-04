export default function BidBar() {
  return (
    <div class="bg-gray-900 px-4 py-2 flex items-center justify-between fixed bottom-0 w-full flex-col sm:flex-row">
      <div class="w-full min-w-6">
        <input
          type="text"
          placeholder="Type your message..."
          class="w-full rounded-none px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-300 sm:rounded-l-lg"
        />
      </div>
      <div class="flex w-full">
        <button
          type="submit"
          class="rounded-lg border-1 border-solid border-transparent p-2 font-medium bg-blue-600 cursor-pointer transition-colors hover:border-[#646cff]"
        >
          Send
        </button>
      </div>
    </div>
  );
}
