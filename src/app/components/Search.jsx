import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

const Search = () => {
  return (
    <div className="flex gap-5 items-center pt-4 pb-6">
      <SearchButton />
      <SearchInput />
    </div>
  );
};

export default Search;
