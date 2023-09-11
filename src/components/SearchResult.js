import React from "react";

// basis-1/5 shrink-0 text-center p-2

function SearchResult({ movieData }) {
  return (
    <div className="mx-auto text-center p-2 md:col-span-3 lg:col-span-1">
      <span className="text-xl text-white tracking-wider">
        Found {movieData?.length ? movieData.length : 0} top results
      </span>
    </div>
  );
}

export default SearchResult;
