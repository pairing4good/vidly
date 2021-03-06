import React, { Component } from "react";
import Like from "./common/like";
import { NavLink } from "react-router-dom";

class Movie extends Component {
  render() {
    const movie = this.props.movie;

    return (
      <tr>
        <td data-testid={"row" + this.props.rowId + "-title"}>
          <NavLink to={"/movies/" + movie._id}>{movie.title}</NavLink>
        </td>
        <td data-testid={"row" + this.props.rowId + "-genre"}>
          {movie.genre.name}
        </td>
        <td data-testid={"row" + this.props.rowId + "-stock"}>
          {movie.numberInStock}
        </td>
        <td data-testid={"row" + this.props.rowId + "-rate"}>
          {movie.dailyRentalRate}
        </td>
        <td>
          <Like onLike={this.props.onLike} movie={movie} />
        </td>
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
