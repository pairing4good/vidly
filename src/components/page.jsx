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
        <div className="row">
          <div className="col-2">
            <ul className="list-group">
              <li
                data-testid={"filter-All"}
                onClick={this.props.onShowAll}
                className={
                  this.props.activeFilter === "All"
                    ? "list-group-item active"
                    : "list-group-item"
                }
              >
                All Genere
              </li>
              {this.props.genres.map((genere) => {
                return (
                  <li
                    key={genere._id}
                    data-testid={"filter-" + genere.name}
                    onClick={() => this.props.onFilter(genere)}
                    className={
                      this.props.activeFilter === genere.name
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                  >
                    {genere.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <div>
              Showing {this.props.movies.length} movies in the database.
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th
                    data-testid={"title-heading"}
                    onClick={() => this.props.onSort("title")}
                    scope="col"
                  >
                    Title
                  </th>
                  <th
                    data-testid={"genre-heading"}
                    onClick={() => this.props.onSort("genre.name")}
                    scope="col"
                  >
                    Genere
                  </th>
                  <th
                    data-testid={"stock-heading"}
                    onClick={() => this.props.onSort("numberInStock")}
                    scope="col"
                  >
                    Stock
                  </th>
                  <th
                    data-testid={"rate-heading"}
                    onClick={() => this.props.onSort("dailyRentalRate")}
                    scope="col"
                  >
                    Rate
                  </th>
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
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Page;
