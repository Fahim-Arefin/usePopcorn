import React from "react";
const average = (arr) =>
  arr?.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function WatchedMovieItem({ watchedMovieData, onDeleteWatchMovie }) {
  const avgImdbRating = average(
    watchedMovieData?.map((movie) => Number(movie.imdbRating))
  );
  const avgUserRating = average(
    watchedMovieData?.map((movie) => movie.userRating)
  );

  const avgRuntime = Math.round(
    average(
      watchedMovieData?.map((movie) => Number(movie.Runtime?.split(" ").at(0)))
    )
  );

  return (
    <div>
      <div className="bg-[#343a40] rounded-xl p-8 text-white">
        <span>MOVIES YOU WATCHED</span>
        <div className="flex space-x-4 mt-1">
          <p>
            <span>#️⃣</span>
            <span>{watchedMovieData?.length} movies</span>
          </p>
          <p>
            <span>⭐️</span>
            <span>{avgImdbRating?.toFixed(2)}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{avgUserRating?.toFixed(2)}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{avgRuntime} min</span>
          </p>
        </div>
      </div>
      {watchedMovieData?.map((watchedMovie) => (
        <div
          key={watchedMovie.imdbID}
          className="border-b-2 border-[#343a40] p-5 pl-16 flex"
        >
          <div>
            <img
              className="w-12"
              src={watchedMovie.Poster}
              alt={watchedMovie.Title}
            />
          </div>
          <div className="text-lg text-white w-full flex flex-col justify-center items-start ml-5">
            <div className="flex justify-between w-[80%]">
              {watchedMovie.Title}
              <div
                onClick={() => onDeleteWatchMovie(watchedMovie.imdbID)}
                className="cursor-pointer"
              >
                ❌
              </div>
            </div>
            <div className="w-[80%] pr-10 text-sm flex items-center py-2 space-x-8">
              <p>
                <span>⭐️</span>
                <span>{watchedMovie.imdbRating}</span>
              </p>
              <p>
                <span>🌟</span>
                <span>{watchedMovie.userRating}</span>
              </p>
              <p>
                <span>⏳</span>
                <span>{watchedMovie.Runtime}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WatchedMovieItem;
