const CardSkeleton = () => {
  return (
    <section className="bg-[#f4f6f8] border border-[#d2dce7] rounded-xl py-4 px-5 animate-pulse">
      <div className="h-6 bg-[#d2dce7] rounded w-3/4 mb-4"></div>
      <hr className="border-t border-[#d2dce7] my-2" />
      <div className="space-y-2">
        <div className="h-4 bg-[#d2dce7] rounded w-full"></div>
        <div className="h-4 bg-[#d2dce7] rounded w-5/6"></div>
      </div>
    </section>
  );
};

export default CardSkeleton;
