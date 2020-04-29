import React, { Component, Fragment } from "react";
import { getMovies } from "./services/fakeMovieService";

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
    return this.state.movies.map((movie) => {
      return (
        <tr key={movie._id}>
          <td scope="row">{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.handleDelete(movie)}
            >
              Delete
            </button>
          </td>
        </tr>
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

    if(this.state.movies.length === 0 ){
      return <div>There are no movies in the database.</div>
     } else {
      return this.renderPage();
    }
  }
}

export default Movies;
