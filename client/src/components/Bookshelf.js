import React, { Component } from "react";
import { Container, CardDeck } from "reactstrap";
import uuid from "uuid";
import BookCard from "./BookCard";
import { connect } from "react-redux";
import { getBooks } from "../actions/bookActions";
import PropTypes from "prop-types";

class Bookshelf extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const { books } = this.props.book;

    const cards = Object.values(books).map(book => (
      <BookCard
        book={book}
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

Bookshelf.protoTypes = {
  getBooks: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  book: state.book
});

export default connect(mapStateToProps, { getBooks })(Bookshelf);
