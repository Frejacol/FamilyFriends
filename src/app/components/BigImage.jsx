import BackButton from "./BackButton";
import FavoriteButton from "./FavoriteButton";
import Image from "next/image";
import BreedLabel from "./BreedLabel";

const BigImage = ({ src, name }) => {
  return (
    <div className="grid pt-2">
      <Image src={src} alt={`Billede af ${name}`} width={600} height={600} className="col-start-1 row-start-1 aspect-[15/16] w-full rounded-[2rem] object-cover" />
      <div className="col-start-1 row-start-1 self-start flex items-center justify-between px-3 pt-3">
        <BackButton />
        <FavoriteButton />
      </div>
      <BreedLabel src={src} name={name} />
    </div>
  );
};

export default BigImage;
