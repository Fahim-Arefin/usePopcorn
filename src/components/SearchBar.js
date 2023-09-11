import { useEffect, useRef } from "react";

function SearchBar({ query, setQuery }) {
  //useRef demo step-1
  const searchInputElement = useRef(null);

  //useRef demo step-3 use useRef inside useEffect
  useEffect(() => {
    const callback = (e) => {
      //input field e active thake enter dile kaj hobe
      if (document.activeElement === searchInputElement.current) {
        return;
      }

      //input field chara enter dile auto input field e focus hobe
      if (e.code === "Enter") {
        searchInputElement.current.focus();
        setQuery("");
      }
    };

    document.addEventListener("keydown", callback);
    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [setQuery]);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="p-2 text-center">
      <input
        type="text"
        className="bg-[#7950f2] w-[70%] h-8 rounded-lg p-5 text-white outline-none text-lg
         text-center placeholder:text-center md:text-start md:placeholder:text-start"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        // useRef demo step -2
        ref={searchInputElement}
      />
    </form>
  );
}

export default SearchBar;
