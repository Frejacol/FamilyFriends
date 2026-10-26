const NoResults = ({ query }) => {
  return (
    <div className="px-5 py-10 text-center">
      <p className="text-lg text-neutral-900">Vi fandt ingen racer for "{query}"</p>
    </div>
  );
};

export default NoResults;
