import BreedCard from "./BreedCard";
import NoResults from "./NoResult";

const Breedcards = async ({ query }) => {
  const url = query ? `https://api.thedogapi.com/v1/breeds/search?q=${query}` : "https://api.thedogapi.com/v1/breeds";
  const headers = {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  };

  const [breedsResponse, favoritesResponse] = await Promise.all([await fetch(url, headers), await fetch("https://api.thedogapi.com/v1/favourites?limit=100", headers)]);

  const [breeds, favorites] = await Promise.all([breedsResponse.json(), favoritesResponse.json()]);

  if (breeds.length === 0) {
    return <NoResults query={query} />;
  }

  return (
    <div className="grid grid-cols-2 gap-4 px-5 py-2">
      {breeds.map((breed) => {
        const isFavorite = favorites.some((favorite) => favorite.image_id === breed.image?.id);

        return <BreedCard key={breed.id} id={breed.id} name={breed.name} country={breed.origin} image={breed.image?.url} favoriteID={breed.image?.id} isFavorite={isFavorite} />;
      })}
    </div>
  );
};

export default Breedcards;
