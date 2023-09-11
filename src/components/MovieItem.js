import React from "react";

function MovieItem({ movieData, setSelectedId }) {
  const handleClick = (id) => {
    setSelectedId((selectedId) => {
      return selectedId === id ? null : id;
    });
  };

  console.log(movieData);

  return (
    <>
      {movieData?.map((movie) => (
        <div
          key={movie.imdbID}
          onClick={() => handleClick(movie.imdbID)}
          className="border-b-2 border-[#343a40] p-5 pl-16 flex cursor-pointer hover:bg-[#343a40]"
        >
          <div>
            <img className="w-12" src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="text-lg text-white w-min-32 flex flex-col justify-center items-start ml-5">
            <div>{movie.Title}</div>
            <div className=" flex items-center">
              <span className="mr-2 pb-1 text-xl">🗓</span>
              {movie.Year}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default MovieItem;
