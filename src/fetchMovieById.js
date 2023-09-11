const key = "9edbb7d1";

const fetchMovieById = async (
  setIsLoading,
  setError,
  selectedId,
  setSelectedMovie
) => {
  try {
    setIsLoading(true);
    setError(false);
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${key}&i=${selectedId}`
    );

    if (!res.ok) {
      throw new Error("Something went wrong during data fetching");
    }

    const data = await res.json();
    setSelectedMovie(data);
  } catch (e) {
    // console.log(e.message)
    // console.log("Hello")
    // setError(e)
  } finally {
    setIsLoading(false);
  }
};

export { fetchMovieById };
