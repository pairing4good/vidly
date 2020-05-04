import React, { Component, Fragment } from "react";
import MovieRows from "./movieRows";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Page extends Component {
  render() {
    const paginatedMovies = paginate(
      this.props.movies,
      this.props.activePage,
      this.props.pageSize
    );

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
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <MovieRows
              movies={paginatedMovies}
              callback={this.props.callback}
              onLike={this.props.onLike}
            />
          </tbody>
        </table>
        <Pagination
          activePage={this.props.activePage}
          count={this.props.movies.length}
          pageSize={this.props.pageSize}
          onPageChange={this.props.onPageChange}
        />
      </Fragment>
    );
  }
}

export default Page;
