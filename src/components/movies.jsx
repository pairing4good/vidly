import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import NoMovies from "./noMovies";
import Page from "./page";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    originalMovies: [],
    genres: [],
    activeFilter: "All",
    sortColumn: { path: "", order: "desc" },
    activePage: 1,
    pageSize: 4,
  };

  handleSort = (path) => {
    var order = this.state.sortColumn.order;

    if (path === this.state.sortColumn.path) {
      order = order === "asc" ? "desc" : "asc";
    } else {
      order = "asc";
    }

    const sortedMovies = _.orderBy(this.state.movies, path, order);

    this.setState({
      sortColumn: { path: path, order: order },
      movies: sortedMovies,
    });
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
      activeFilter: "All",
      movies: [...this.state.originalMovies],
      activePage: 1,
    });
  };

  handleFiltering = (genre) => {
    const filteredMovies = this.state.originalMovies.filter((movie) => {
      return movie.genre._id === genre._id;
    });

    this.setState({
      activeFilter: genre.name,
      movies: filteredMovies,
      activePage: 1,
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
          activeFilter={this.state.activeFilter}
          activePage={this.state.activePage}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
          movies={this.state.movies}
          genres={this.state.genres}
          onFilter={this.handleFiltering}
          onShowAll={this.handleShowAll}
          callback={this.handleDelete}
          onLike={this.handleLike}
          onSort={this.handleSort}
        />
      );
    }
  }
}

export default Movies;
