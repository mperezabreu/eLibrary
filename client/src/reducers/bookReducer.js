import uuid from "uuid";
import { GET_BOOKS, DELETE_BOOK, ADD_BOOK } from "../actions/types";

const initialState = {
  books: [
    { id: uuid(), title: "Aprendiendo a Aprender", author: "M. Perez" },
    { id: uuid(), title: "Aprendiendo a Aprender v2", author: "M. Perez" },
    { id: uuid(), title: "Buscando la luz", author: "J. Aper" },
    { id: uuid(), title: "Logrando la felicidad", author: "Q. Apero" },
    { id: uuid(), title: "Paso a Paso", author: "C. Calma" },
    { id: uuid(), title: "Aprendiendo a Aprender", author: "M. Perez" },
    { id: uuid(), title: "Aprendiendo a Aprender v2", author: "M. Perez" },
    { id: uuid(), title: "Buscando la luz", author: "J. Aper" },
    { id: uuid(), title: "Logrando la felicidad", author: "Q. Apero" },
    { id: uuid(), title: "Paso a Paso", author: "C. Calma" },
    { id: uuid(), title: "Aprendiendo a Aprender", author: "M. Perez" },
    { id: uuid(), title: "Aprendiendo a Aprender v2", author: "M. Perez" },
    { id: uuid(), title: "Buscando la luz", author: "J. Aper" },
    { id: uuid(), title: "Logrando la felicidad", author: "Q. Apero" },
    { id: uuid(), title: "Paso a Paso", author: "C. Calma" }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload)
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [action.payload, ...state.books]
      };
    default:
      return state;
  }
}
