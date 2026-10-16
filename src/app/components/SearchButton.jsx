import { FaSearch } from "react-icons/fa";

const SearchButton = () => {
  return (
    <button className="bg-[#F2968F] p-4 rounded-full inline-block">
      <FaSearch className="w-5 h-5 -scale-x-100 text-white" />
    </button>
  );
};

export default SearchButton;
