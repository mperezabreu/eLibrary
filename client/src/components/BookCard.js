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
import pcimage from "../image/open_book-512.png";
//import './ItemCard.css';

class BookCard extends Component {
  render() {
    const book = this.props.book;

    return (
      <div>
        <Card className="card-style" style={{ flex: 1 }}>
          <CardImg top width="100%" object src={pcimage} alt="Card image cap" />
          <CardBody>
            <CardTitle>Titulo:{book.title}</CardTitle>
            <CardSubtitle>
              Escrito por:{book.author} en {book.pubdate}
            </CardSubtitle>
            <CardText>Uploaded:{book.upldate}</CardText>
          </CardBody>
          <ProfileModal book={book} />
        </Card>
      </div>
    );
  }
}

export default BookCard;
