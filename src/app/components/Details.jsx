import DetailHeading from "./DetailHeading";
import Traits from "./Traits";
import BreedDesc from "./BreedDesc";

const Details = ({ breed }) => {
  return (
    <>
      <DetailHeading name={breed.name} />
      <Traits temperament={breed.temperament} />
      <BreedDesc description={breed.description} history={breed.history} lifeSpan={breed.life_span} />
    </>
  );
};

export default Details;
