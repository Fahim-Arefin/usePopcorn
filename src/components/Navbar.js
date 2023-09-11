import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

// bg-[#6741d9] w-[97%] mx-auto p-4 m-6 rounded-lg flex items-center justify-between

function Navbar({ movieData, query, setQuery }) {
  return (
    <div className="bg-[#6741d9] w-[97%] mx-auto p-4 m-6 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Logo />
      <SearchBar query={query} setQuery={setQuery} />
      <SearchResult movieData={movieData} />
    </div>
  );
}

export default Navbar;
