import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import { fetchData } from "./fetchApi";
import { fetchMovieById } from "./fetchMovieById";

function App() {
  const [tempMovieData, setTempMovieData] = useState([]);
  const [tempWatchedData, setTempWatchedData] = useState(() => {
    const initialData = localStorage.getItem("watched");
    // return JSON.parse(initialData);
    if (!JSON.parse(initialData)) {
      return [];
    } else {
      return JSON.parse(initialData);
    }
  });

  const [query, setQuery] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);

  const [selectedId, setSelectedId] = useState(null);

  const [selectedMovie, setSelectedMovie] = useState({});

  const handleWatchedMovie = (newWatchListItem) => {
    setTempWatchedData([...tempWatchedData, newWatchListItem]);
  };

  const handleDeletedWatchMovie = (id) => {
    setTempWatchedData(tempWatchedData?.filter((movie) => movie.imdbID !== id));
  };

  //every change on search bar this useEffect executes
  useEffect(() => {
    const controller = new AbortController();
    fetchData(query, setTempMovieData, setIsLoading, setError, controller);
    setSelectedId(null);

    return () => {
      controller.abort();
    };
  }, [query]); // **important**

  useEffect(() => {
    fetchMovieById(setIsLoading2, setError2, selectedId, setSelectedMovie);
  }, [selectedId]);

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(tempWatchedData));
  }, [tempWatchedData]);

  return (
    <div className="">
      <Navbar query={query} setQuery={setQuery} movieData={tempMovieData} />
      <Main
        movieData={tempMovieData}
        watchedMovieData={tempWatchedData}
        isLoading={isLoading}
        isLoading2={isLoading2}
        error={error}
        error2={error2}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        selectedMovie={selectedMovie}
        onAddWatch={handleWatchedMovie}
        onDeleteWatchMovie={handleDeletedWatchMovie}
      />
    </div>
  );
}

export default App;
