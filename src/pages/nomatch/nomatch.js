import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";


class NoMatch extends Component {
  render() {
    return (
      <Jumbotron>
        <h1 className="display-3">Page not found!</h1>
        <p className="lead">You are in the land of no where.</p>
        <hr className="my-2" />
        <p>Find something intereting ...</p>
        <p className="lead">
          <Link to="/hot" className="btn btn-lg btn-primary">
            Go Home
          </Link>
        </p>
      </Jumbotron>
    );
  }
}

export default NoMatch;
