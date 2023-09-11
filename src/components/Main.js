import Panel from "./Panel";
import MovieList from "./MovieList";
import WatchedMovieList from "./WatchedMovieList";
import SelectedMovie from "./SelectedMovie";

function Main({
  movieData,
  watchedMovieData,
  isLoading,
  error,
  selectedId,
  setSelectedId,
  selectedMovie,
  error2,
  isLoading2,
  onAddWatch,
  onDeleteWatchMovie,
}) {
  return (
    <div className="flex flex-col md:flex-row md:justify-center h-min">
      <Panel className="w-full md:w-[45%] lg:w-[40%] xl:w-[35%] 2xl:w-[25%] m-2 rounded-lg max-h-[800px] overflow-y-scroll">
        <MovieList
          movieData={movieData}
          isLoading={isLoading}
          error={error}
          setSelectedId={setSelectedId}
        />
      </Panel>

      {selectedId ? (
        <Panel className="w-full md:w-[45%] lg:w-[40%] xl:w-[35%] 2xl:w-[25%] m-2 rounded-lg min-h-[800px]">
          <SelectedMovie
            selectedMovie={selectedMovie}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            isLoading2={isLoading2}
            error2={error2}
            onAddWatch={onAddWatch}
            watchedMovieData={watchedMovieData}
          />
        </Panel>
      ) : (
        <Panel className="w-full md:w-[45%] lg:w-[40%] xl:w-[35%] 2xl:w-[25%] m-2 rounded-lg min-h-[800px]">
          <WatchedMovieList
            watchedMovieData={watchedMovieData}
            onDeleteWatchMovie={onDeleteWatchMovie}
          />
        </Panel>
      )}
    </div>
  );
}

export default Main;
