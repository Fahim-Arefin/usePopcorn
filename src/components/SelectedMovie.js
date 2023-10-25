import { useEffect, useRef, useState } from "react";
import Loader from "./Loader";
import StarRating from "./StarRating";
import { GrFormPreviousLink } from "react-icons/gr";

function SelectedMovie({
  selectedMovie,
  selectedId,
  setSelectedId,
  isLoading2,
  error2,
  onAddWatch,
  watchedMovieData,
}) {
  const [userRating, setUserRating] = useState(0);
  const ratingDecisionCount = useRef(0);

  const handleAddWatchList = () => {
    const newlyAddedToWatchList = {
      ...selectedMovie,
      userRating,
      ratingDecisionCount,
    };
    console.log(newlyAddedToWatchList);
    onAddWatch(newlyAddedToWatchList);
    setSelectedId(null);
  };

  // esc btn event syncronize effect
  useEffect(() => {
    const callback = (e) => {
      if (e.code === "Escape") {
        setSelectedId(null);
        console.log("Closing");
      }
    };
    document.addEventListener("keydown", callback);
    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [setSelectedId]);

  // title change syncronize effect
  useEffect(() => {
    if (!selectedMovie.Title) {
      return;
    }
    document.title = `Movie | ${selectedMovie.Title}`;
    //executes after unmount or before 2nd time is called
    return () => {
      document.title = "usePopcorn";
      console.log(`after unmount executes - ${selectedMovie.Title}`);
    };
  }, [selectedMovie.Title]);

  useEffect(() => {
    if (userRating) {
      ratingDecisionCount.current++;
    }
  }, [userRating]);

  const watchedIdArray = watchedMovieData?.map((watch) => watch.imdbID);
  const isWatch = watchedIdArray?.includes(selectedId);

  const watchedUserRating = watchedMovieData?.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  return (
    <>
      {!isLoading2 ? (
        <>
          <div className="flex bg-[#343a40] text-white relative">
            <div>
              <img className=" w-52" src={selectedMovie.Poster} alt="a" />
            </div>
            <div className="w-full px-8 py-6 flex flex-col justify-around">
              <h2 className="text-xl">{selectedMovie.Title}</h2>
              <p className="text-xs text-slate-300">
                {selectedMovie.Released}&nbsp; &bull; &nbsp;
                {selectedMovie.Runtime}
              </p>
              <p className="text-xs text-slate-300">{selectedMovie.Genre}</p>
              <p className="text-xs text-slate-300">
                &#11088; {selectedMovie.imdbRating}&nbsp; IMDB rating
              </p>
            </div>
            <div
              onClick={() => setSelectedId(null)}
              className="absolute top-2 left-2 bg-white p-2 rounded-full cursor-pointer hover:bg-slate-300 active:bg-slate-400"
            >
              <GrFormPreviousLink className="text-2xl" />
            </div>
          </div>

          <section className="bg-[#343a40] w-[80%] mx-auto mt-20 px-10 py-8 rounded-xl">
            {!isWatch ? (
              <div className="flex flex-col justify-center items-center">
                <StarRating
                  maxRating={10}
                  size={23}
                  className="w-full px-4 py-3"
                  setUserRating={setUserRating}
                />
                {userRating ? (
                  <button
                    onClick={handleAddWatchList}
                    className=" bg-[#6741d9] text-white px-6 py-1 rounded-full hover:bg-[#5c36cc] active:bg-[#4a2ea0] transition-all duration-100"
                  >
                    Add watch list +
                  </button>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <p className="text-white text-center bg-slate-700 p-4 rounded-lg">
                You rated this movie {watchedUserRating}⭐️
              </p>
            )}
          </section>

          <section className="m-10 p-4 space-y-5 text-slate-300 text-sm">
            <p>
              <em>{selectedMovie.Plot}</em>
            </p>
            <p>Starring {selectedMovie.Actors}</p>
            <p>Directed By {selectedMovie.Director}</p>
          </section>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default SelectedMovie;
