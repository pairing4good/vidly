import React, { Component, Fragment } from "react";
import MovieRows from "./movieRows";

class Page extends Component {

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
          <tbody><MovieRows movies={this.props.movies} callback={this.props.callback}/></tbody>
        </table>
      </Fragment>
    );
  }
}

export default Page;
