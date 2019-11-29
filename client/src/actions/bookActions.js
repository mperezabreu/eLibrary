import { GET_BOOKS, ADD_BOOK, DELETE_BOOK, BOOKS_LOADING } from "./types";
import axios from "axios";

export const getBooks = () => dispatch => {
  dispatch(setBooksLoading());
  axios.get("/api/books").then(res =>
    dispatch({
      type: GET_BOOKS,
      payload: res.data
    })
  );
};

export const addBook = book => dispatch => {
  axios.post("/api/books", book).then(res =>
    dispatch({
      type: ADD_BOOK,
      payload: res.data
    })
  );
};

export const deleteBook = id => {
  return {
    type: DELETE_BOOK,
    payload: id
  };
};

export const setBooksLoading = () => {
  return {
    type: BOOKS_LOADING
  };
};
