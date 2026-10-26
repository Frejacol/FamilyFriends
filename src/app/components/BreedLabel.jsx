import Image from "next/image";

const BreedLabel = ({ name, src }) => {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/30 p-2 pr-6 backdrop-blur-md col-start-1 row-start-1 self-end justify-self-start m-4">
      <Image loading="eager" src={src} alt="" width={56} height={56} className="size-14 rounded-xl object-cover" />
      <p className="text-lg text-white self-start">{name}</p>
    </div>
  );
};

export default BreedLabel;
