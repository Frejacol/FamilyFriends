const DetailSkeleton = () => {
  return (
    <div className="animate-pulse pt-2">
      <div className="aspect-[15/16] w-full rounded-[2rem] bg-neutral-200" />
      <div className="mt-4 h-8 w-1/2 rounded bg-neutral-200" />
      <div className="flex flex-wrap gap-3 pt-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-10 w-24 rounded-full bg-neutral-200" />
        ))}
      </div>
      <div className="mt-6 space-y-3">
        <div className="h-4 w-1/3 rounded bg-neutral-200" />
        <div className="h-5 w-full rounded bg-neutral-200" />
        <div className="h-5 w-5/6 rounded bg-neutral-200" />
      </div>
    </div>
  );
};

export default DetailSkeleton;
