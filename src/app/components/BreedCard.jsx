import Image from "next/image";
import FavoriteButton from "./FavoriteButton.jsx";
import BreedCardDesc from "./BreedCardDesc.jsx";
import Link from "next/link";

const BreedCard = ({ name, country }) => {
  return (
    <Link href="/detailview">
      <div className="grid rounded-3xl bg-white shadow-lg">
        <Image src="/dummydog.jpg" alt={`Billede af ${name}`} width={400} height={300} className="col-start-1 row-start-1 aspect-[4/3] w-full rounded-2xl object-cover" />
        <FavoriteButton />
        <BreedCardDesc breedName={name} breedCountry={country} />
      </div>
    </Link>
  );
};

export default BreedCard;
