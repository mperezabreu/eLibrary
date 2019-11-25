import React, { Component } from "react";
import { Container, CardDeck } from "reactstrap";
import uuid from "uuid";
import BookCard from "./BookCard";

class Bookshelf extends Component {
  state = {
    books: [
      { id: uuid(), title: "Aprendiendo a Aprender", author: "M. Perez" },
      { id: uuid(), title: "Aprendiendo a Aprender v2", author: "M. Perez" },
      { id: uuid(), title: "Buscando la luz", author: "J. Aper" },
      { id: uuid(), title: "Logrando la felicidad", author: "Q. Apero" },
      { id: uuid(), title: "Paso a Paso", author: "C. Calma" }
    ]
  };

  render() {
    const { books } = this.state;

    const cards = Object.values(books).map(book => (
      <BookCard
        title={book.title}
        author={book.author}

        //image={book.img}
        //upldate={book.uplodate}
        //clicked={() => this.showItemDetailHandler(card.id)}
      />
    ));

    return (
      <Container>
        <CardDeck style={{ display: "flex", flexDirection: "row" }}>
          {cards}
        </CardDeck>
      </Container>
    );
  }
}

export default Bookshelf;
