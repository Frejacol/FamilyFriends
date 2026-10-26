import BreedCard from "./BreedCard";
import NoResults from "./NoResult";

const Breedcards = async ({ query }) => {
  const url = query ? `https://api.thedogapi.com/v1/breeds/search?q=${query}` : "https://api.thedogapi.com/v1/breeds";
  const response = await fetch(url, {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });
  const breeds = await response.json();

  if (breeds.length === 0) {
    return <NoResults query={query} />;
  }

  return (
    <div className="grid grid-cols-2 gap-4 px-5 py-2">
      {breeds.map((breed) => (
        <BreedCard name={breed.name} country={breed.origin} image={breed.image?.url} key={breed.id} id={breed.id} />
      ))}
    </div>
  );
};

export default Breedcards;
