const BreedDesc = ({ description, history }) => {
  return (
    <div className="mt-4">
      <h4 className="text-base text-[#999999]">Breed description</h4>
      <p className="text-lg text-[#666666]">{description}</p>
      <br />
      <h4 className="text-base text-[#999999]">Breed history</h4>
      <p className="text-lg text-[#666666]">{history}</p>
    </div>
  );
};

export default BreedDesc;
