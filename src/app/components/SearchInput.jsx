const SearchInput = ({ query }) => {
  return <input type="search" name="query" defaultValue={query} placeholder="search breeds" className="w-full rounded-full border border-gray-300 px-6 py-3 text-lg placeholder:text-gray-300" />;
};

export default SearchInput;
