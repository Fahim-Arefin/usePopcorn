const key = "9edbb7d1";

const fetchData = async (
  query,
  setTempMovieData,
  setIsLoading,
  setError,
  controller
) => {
  try {
    setIsLoading(true);
    setError(false);
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
      {
        signal: controller.signal,
      }
    );

    if (!res.ok) {
      throw new Error("Something went wrong during data fetching");
    }

    const data = await res.json();

    setTempMovieData(data.Search);
    // console.log(data.Search);
    // return data.Search;
  } catch (e) {
    console.log(e.message)
    if (e.name !== "AbortError") {
      setError(e.message);
    }
    setError(false)
  } finally {
    setIsLoading(false);
  }
};

export { fetchData };
