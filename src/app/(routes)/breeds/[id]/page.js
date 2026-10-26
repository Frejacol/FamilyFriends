import { Suspense } from "react";
import BreedDetail from "@/app/components/BreedDetail";
import DetailSkeleton from "@/app/components/DetailSkeleton";

const DetailView = async ({ params }) => {
  const { id } = await params;

  return (
    <Suspense fallback={<DetailSkeleton />}>
      <BreedDetail id={id} />
    </Suspense>
  );
};

export default DetailView;
