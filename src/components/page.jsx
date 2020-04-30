import React, { Component, Fragment } from "react";
import Movie from "./movie";

class Page extends Component {
  renderMovieRows = () => {
    return this.props.movies.map((movie, i) => {
      return (
        <Movie
          key={i}
          movies={this.props.movies}
          movie={movie}
          callback={this.props.callback}
        />
      );
    });
  };

  render() {
    return (
      <Fragment>
        <div>Showing {this.props.movies.length} movies in the database.</div>
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
  }
}

export default Page;
