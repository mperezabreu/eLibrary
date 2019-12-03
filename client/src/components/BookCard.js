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
import EditorModal from "./EditorModal";

import pcimage from "../image/open_book-512.png";

class BookCard extends Component {
  clickDelete = _id => {
    this.props.deleteCard(_id);
  };

  render() {
    const book = this.props.book;

    return (
      <div>
        <Card className="card-style" style={{ flex: 1, borderColor: "#333" }}>
          <CardImg top width="100%" object src={pcimage} alt="Card image cap" />
          <CardBody>
            <CardTitle>Titulo:{book.title}</CardTitle>
            <CardSubtitle>
              Escrito por:{book.author} en {Date.now()}
            </CardSubtitle>
            <CardText>Uploaded:{Date.now()}</CardText>
          </CardBody>
          <ProfileModal book={book} />
          <EditorModal
            edit={true}
            bookid={book._id}
            htmlcontent={book.content}
            booktitle={book.title}
            bookauthor={book.author}
            bookpublisher={book.publisher}
            buttonColor={"link"}
            buttonType={"Modificar Libro"}
          />
          <Button
            className="remove-btn"
            color="danger"
            size="sm"
            onClick={this.clickDelete.bind(this, book._id)}
          ></Button>
        </Card>
      </div>
    );
  }
}

export default BookCard;
