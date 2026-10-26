const BreedcardsSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-4 px-5 py-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-3xl bg-white shadow-lg animate-pulse">
          <div className="aspect-[4/3] w-full rounded-2xl bg-neutral-200" />
          <div className="px-3 pt-3 pb-4 space-y-2">
            <div className="h-5 w-2/3 rounded bg-neutral-200" />
            <div className="h-4 w-1/2 rounded bg-neutral-200" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BreedcardsSkeleton;
