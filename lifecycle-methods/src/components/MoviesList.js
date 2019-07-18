import React, { Fragment } from "react";
import Movie from "./Movie";

class MoviesList extends React.Component {
  render() {
    return (
      <Fragment>
        {this.props.movies.map((el, i) => (
          <Movie
            deleteMovie={() => this.props.deleteMovie(i)}
            key={i}
            {...el}
          />
        ))}
      </Fragment>
    );
  }
}

export default MoviesList;
