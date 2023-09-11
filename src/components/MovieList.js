import React from "react";
import MovieItem from "./MovieItem";
import Loader from "./Loader";
import Error from "./Error";

function MovieList({ movieData, isLoading, error, setSelectedId }) {
  return (
    <div className="mt-2">
      {/* {isLoading?<Loader/>:<MovieItem movieData={movieData} />} */}
      {isLoading ? (
        <Loader />
      ) : movieData?.length ? (
        <MovieItem movieData={movieData} setSelectedId={setSelectedId} />
      ) : error ? (
        <Error message="⛔ Something went wrong during fetch Data" />
      ) : (
        <div className="text-center p-12 text-white text-xl">
          ⛔ No Data Found
        </div>
      )}
    </div>
  );
}

export default MovieList;
