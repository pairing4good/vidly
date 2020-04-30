import React, { Component } from "react";

class Movie extends Component {
  render() {
    const movie = this.props.movie;

    return (
      <tr>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.callback(movie)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Movie;
