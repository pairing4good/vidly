import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import NoMovies from "./noMovies";
import Page from "./page";

class Movies extends Component {
  state = {
    movies: [],
    originalMovies: [],
    genres: [],
    activePage: 1,
    pageSize: 4,
  };

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: getGenres(),
      originalMovies: getMovies(),
    });
  }

  handleShowAll = () => {
    this.setState({
      movies: [...this.state.originalMovies],
    });
  };

  handleFiltering = (genre) => {
    const filteredMovies = this.state.originalMovies.filter((movie) => {
      return movie.genre._id === genre._id;
    });

    this.setState({
      movies: filteredMovies,
    });
  };

  handleDelete = (movieToRemove) => {
    const filteredMovies = this.state.movies.filter(
      (movie) => movie._id !== movieToRemove._id
    );

    const filteredOriginalMovies = this.state.originalMovies.filter(
      (movie) => movie._id !== movieToRemove._id
    );

    this.setState({
      movies: filteredMovies,
      originalMovies: filteredOriginalMovies,
    });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ activePage: page });
  };

  render() {
    if (this.state.movies.length === 0) {
      return <NoMovies />;
    } else {
      return (
        <Page
          activePage={this.state.activePage}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
          movies={this.state.movies}
          genres={this.state.genres}
          onFilter={this.handleFiltering}
          onShowAll={this.handleShowAll}
          callback={this.handleDelete}
          onLike={this.handleLike}
        />
      );
    }
  }
}

export default Movies;
