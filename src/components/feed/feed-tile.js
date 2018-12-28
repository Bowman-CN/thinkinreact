import React, { Component } from "react";
import PropTypes from "prop-types";
import "./feed-tile.less"; // Tell Webpack that Button.js uses these styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { Card, CardText, CardSubtitle, CardBody, Badge } from "reactstrap";

class FeedTile extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // static defaultProps = {};

  render() {
    const {
      infoBody,
      infoTimestamp,
      infoLink,
      image,
      author,
      hasImage
    } = this.props;
    return (
      <Card style={{ padding: "1rem" }} className="p-3 my-3">
        <div className="row-layout">
          <div className="content">
            <CardBody style={{ width: "80%" }}>
              <CardSubtitle>
                {author}
                <span style={{ fontSize: ".8rem" }} className="ml-5 text-muted">
                  @{infoTimestamp}
                </span>
              </CardSubtitle>
              <CardText className="mt-3">
                <a
                  href={infoLink}
                  className="feed-link-text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {infoBody}
                </a>
              </CardText>
              <Badge color="light">
                <FontAwesomeIcon icon={faHeart} />
              </Badge>
              <Badge color="light">
                <FontAwesomeIcon icon={faStar} />
              </Badge>
            </CardBody>
          </div>
          <div className="img-sec">
            {/* {this.state.showWarning ? 'Hide' : 'Show'} prevent component from rendering */}
            {!hasImage && (
              <img
                src={process.env.PUBLIC_URL + "./assets/image-placeholder.png"}
                alt="no feed attachment"
              />
            )}
            {hasImage && (
              <img
                src={"data:image/JPEG;base64," + image}
                alt="feed attachment"
              />
            )}
          </div>
        </div>
      </Card>
    );
  }
}

// FeedTile.contextTypes = {
//   router: React.PropTypes.object.isRequired
// };

FeedTile.defaultProps = {
  infoBody: "no message has been loaded",
  infoLink: "javascript:void(0)",
  image: "",
  infoTimestamp: "time",
  author: "Paperboy",
  hasImage: false
};

FeedTile.propTypes = {
  infoBody: PropTypes.string,
  infoLink: PropTypes.string,
  image: PropTypes.string,
  infoTimestamp: PropTypes.string,
  author: PropTypes.string,
  hasImage: PropTypes.bool
};

export default FeedTile;
