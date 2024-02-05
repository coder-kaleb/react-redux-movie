import { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Harry'
  const showText = "Friends"

  // Fetch movies and shows on component mount
  useEffect(() => {
    dispatch(fetchAsyncMovies( movieText ));
    dispatch(fetchAsyncShows( showText ));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
