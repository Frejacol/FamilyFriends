import { Suspense } from "react";
import Breedcards from "./components/Breedcards";
import Search from "./components/Search";
import BreedcardsSkeleton from "./components/BreedcardsSkeleton";
import "./globals.css";

export default async function ListView({ searchParams }) {
  const { query } = await searchParams;

  return (
    <>
      <Search query={query} />
      <Suspense fallback={<BreedcardsSkeleton />}>
        <Breedcards query={query} />
      </Suspense>
    </>
  );
}
