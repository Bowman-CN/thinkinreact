import React, { Component } from "react";
import "./list.css"; // Tell Webpack that Button.js uses these styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Badge
} from "reactstrap";

class GoodLists extends Component {
  constructor(props) {
    super();
  }

  render() {
    // You can use them as regular CSS styles
    return (
      <Card>
        <div className="col-md-12 col-xs-12 d-flex flex-row flex-nowrap">
          <CardBody>
            <CardTitle>Card title <smaller className="text-muted">subtitle</smaller> </CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Badge color="light">
              <FontAwesomeIcon icon={faHeart} />
            </Badge>
          </CardBody>
          <CardImg
            top
            width="100%"
            src={process.env.PUBLIC_URL + "./assets/image-placeholder.png"}
            alt="Card image cap"
          />
        </div>
      </Card>
    );
  }
}

export default GoodLists;
