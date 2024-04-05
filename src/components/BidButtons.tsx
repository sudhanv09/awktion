const BidGroup = () => {
  return (
    <div class="space-y-4 py-24">
      <div class="space-x-8">
        <button
          type="submit"
          class="rounded-lg border-1 border-solid border-transparent p-4 font-medium bg-[#1a1a1a] cursor-pointer transition-colors hover:border-[#646cff]"
        >
          Bid
        </button>
        <button
          type="submit"
          class="rounded-lg border-1 border-solid border-transparent p-4 font-medium bg-[#1a1a1a] cursor-pointer transition-colors hover:border-[#646cff]"
        >
          Bid
        </button>
        <button
          type="submit"
          class="rounded-lg border-1 border-solid border-transparent p-4 font-medium bg-[#1a1a1a] cursor-pointer transition-colors hover:border-[#646cff]"
        >
          Bid
        </button>
      </div>
      <input
        type="text"
        name="username"
        class="w-80 h-12 text-center bg-[#1a1a1a] text-white rounded-lg"
        placeholder="Custom Bid"
      />
    </div>
  );
};

export default BidGroup;
