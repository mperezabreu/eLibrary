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
    const isAuthenticated = this.props.isAuthenticated;
    const admin = this.props.admin;

    return (
      <div>
        <Card className="card-style" style={{ flex: 1, borderColor: "#333" }}>
          <CardImg top width="100%" object src={pcimage} alt="Card image cap" />
          <CardBody>
            <CardTitle>Titulo:{book.title}</CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText>Uploaded:{Date.now().toString()}</CardText>
          </CardBody>
          Escrito por:{book.author} en {book.pubdate.toString()}
          <ProfileModal book={book} htmlcontent={book.content} />
          <EditorModal
            admin={admin}
            readmode={false}
            bookid={book._id}
            htmlcontent={book.content}
            booktitle={book.title}
            bookauthor={book.author}
            bookpublisher={book.publisher}
            buttonColor={"link"}
            buttonType={"Modificar Libro"}
          />
          {this.props.isAuthenticated ? (
            <Button
              disabled={!admin}
              className="remove-btn"
              color="danger"
              size="sm"
              onClick={this.clickDelete.bind(this, book._id)}
            ></Button>
          ) : null}
        </Card>
      </div>
    );
  }
}

export default BookCard;
