const BreedCardDesc = ({ breedName, breedCountry }) => {
  return (
    <div className="px-3 pt-3 pb-4">
      <h2 className="text-lg font-semibold text-neutral-900">{breedName}</h2>
      <p className="text-sm pr-4 text-neutral-400 text-s">{breedCountry}</p>
    </div>
  );
};

export default BreedCardDesc;
