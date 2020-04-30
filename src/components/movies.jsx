import React, { Component, Fragment } from "react";
import { getMovies } from "../services/fakeMovieService";
import Movie from "./movie";
import NoMovies from "./noMovies";

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

  renderMovieRows = () => {
    return this.state.movies.map((movie, i) => {
      return (
        <Movie
          key={i}
          movies={this.state.movies}
          movie={movie}
          callback={this.handleDelete}
        />
      );
    });
  };

  renderPage = () => {
    return (
      <Fragment>
        <div>Showing {this.state.movies.length} movies in the database.</div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genere</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{this.renderMovieRows()}</tbody>
        </table>
      </Fragment>
    );
  };

  render() {
    if (this.state.movies.length === 0) {
      return <NoMovies />;
    } else {
      return this.renderPage();
    }
  }
}

export default Movies;
