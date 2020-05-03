import React, { createContext, useReducer, useEffect } from "react";
import { BookReducer } from "../reducers/BookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  // const addBook = (title, author) => {
  //   setBooks([...books, { title, author, id: uuid() }]);
  // };

  // const removeBook = (id) => {
  //   setBooks(books.filter((book) => book.id !== id));
  // };

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
