import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "../../CSS/movieListing.css";
import Slider from "react-slick";
import { settings } from "../../common/settings";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const loading = useSelector((state) => state.movies.loading);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShow = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div>{movies.Error}</div>
    );

  renderShow =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div>{movies.Error}</div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {loading ? (
            <div style={{ color: "white"}}>Loading....</div>
          ) : (
            <Slider {...settings}>{renderMovies}</Slider>
          )}
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          {loading ? (
            <div style={{ color: "white"}}>Loading....</div>
          ) : (
            <Slider {...settings}>{renderShow}</Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
