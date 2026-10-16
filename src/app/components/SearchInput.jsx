import Form from "next/form";

const SearchInput = () => {
  return (
    <Form className="w-full">
      <input type="search" id="search" name="search" placeholder="search breeds" className="w-full rounded-full border border-gray-300 px-6 py-3 text-lg placeholder:text-gray-300" />
    </Form>
  );
};

export default SearchInput;
