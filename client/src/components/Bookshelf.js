import React, { Component } from "react";
import { Container, CardDeck } from "reactstrap";
import BookCard from "./BookCard";
import CreateBookCard from "./CreateBookCard";
import { connect } from "react-redux";
import { getBooks, deleteBook } from "../actions/bookActions";
import PropTypes from "prop-types";

class Bookshelf extends Component {
  static propTypes = {
    getBooks: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getBooks();
  }

  onDeleteClick = _id => {
    this.props.deleteBook(_id);
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  render() {
    const { books } = this.props.book;
    /*
    const cards = Object.values(books).map(book => (
      <BookCard
        book={book}
        //image={book.img}
        //upldate={book.uplodate}
        //clicked={() => this.showItemDetailHandler(card.id)}
      />
    ));*/

    return (
      <div>
        {this.props.isAuthenticated ? (
          <h4>No esconder boton de eliminar</h4>
        ) : (
          <h4>esconderbotonparaeliminar</h4>
        )}
        <Container>
          <CardDeck style={{ display: "flex", flexDirection: "row" }}>
            <CreateBookCard key="createBookCard" />
            {Object.values(books).map(book => (
              <BookCard
                key={book._id}
                book={book}
                deleteCard={this.onDeleteClick}
                isAuthenticated={this.props.isAuthenticated}
                //image={book.img}
                //upldate={book.uplodate}
                //clicked={() => this.showItemDetailHandler(card.id)}
              />
            ))}
          </CardDeck>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  book: state.book,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getBooks, deleteBook })(Bookshelf);
