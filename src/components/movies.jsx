import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import NoMovies from "./noMovies";
import Page from "./page";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movieToRemove) => {
    const filteredMovies = this.state.movies.filter(
      (movie) => movie._id !== movieToRemove._id
    );

    this.setState({
      movies: filteredMovies,
    });
  };

  render() {
    if (this.state.movies.length === 0) {
      return <NoMovies />;
    } else {
      return <Page movies={this.state.movies} callback={this.handleDelete} />;
    }
  }
}

export default Movies;
