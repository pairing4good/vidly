import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import NoMovies from "./noMovies";
import Page from "./page";

class Movies extends Component {
  state = {
    movies: getMovies(),
    activePage: 1,
    pageSize: 4,
  };

  handleDelete = (movieToRemove) => {
    const filteredMovies = this.state.movies.filter(
      (movie) => movie._id !== movieToRemove._id
    );

    this.setState({
      movies: filteredMovies,
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
          callback={this.handleDelete}
          onLike={this.handleLike}
        />
      );
    }
  }
}

export default Movies;
