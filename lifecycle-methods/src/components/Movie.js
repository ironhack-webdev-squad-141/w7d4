import React, { Fragment } from "react";

class Movie extends React.Component {
  componentDidMount() {
    console.log("<Movie/> DID MOUNT");
  }

  componentDidUpdate() {
    console.log("<Movie/> DID UPDATE");
  }

  componentWillUnmount() {
    console.log("<Movie/> WILL UNMOUNT");
  }

  render() {
    console.log("<Movie/> RENDER");
    const { title, director, hasOscars, IMDbRating } = this.props;
    return (
      <Fragment>
        <h2>{title}</h2>
        <p>directed by {director}</p>
        <p>IMDB rating: {IMDbRating}</p>
        {hasOscars && <h4>Award-winning movie!</h4>}
        <button onClick={this.props.deleteMovie}>delete</button>
      </Fragment>
    );
  }
}

export default Movie;
