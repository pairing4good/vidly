import React, { Component } from 'react';
import Movie from "./movie"

class MovieRows extends Component {

    render() { 
        return ( this.props.movies.map((movie, i) => {
            return (
              <Movie
                key={i}
                movies={this.props.movies}
                movie={movie}
                callback={this.props.callback}
                onLike={this.props.onLike}
              />
            );
          }) );
    }
}
 
export default MovieRows;