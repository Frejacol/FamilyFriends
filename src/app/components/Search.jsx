import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import Form from "next/form";
import Link from "next/link";

const Search = ({ query }) => {
  return (
    <Form className="w-full">
      <div className="flex gap-5 items-center pt-4 pb-6">
        <SearchButton />
        <SearchInput query={query} />
      </div>
      {query && (
        <Link href="/" className="text-sm text-[#E89A8F]">
          ← Vis alle racer
        </Link>
      )}
    </Form>
  );
};

export default Search;
