import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import ProfileModal from "./ProfileModal";
//import './ItemCard.css';

class BookCard extends Component {
  render() {
    return (
      <div>
        <Card className="card-style" style={{ flex: 1 }}>
          <CardImg
            top
            width="100%"
            /*src={this.props.image}*/ alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Titulo:{this.props.title}</CardTitle>
            <CardSubtitle>
              Escrito por:{this.props.author} en {this.props.pubdate}
            </CardSubtitle>
            <CardText>Uploaded:{this.props.upldate}</CardText>
          </CardBody>
          <ProfileModal></ProfileModal>
        </Card>
      </div>
    );
  }
}

export default BookCard;
