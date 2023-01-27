import React from "react";
import BookList from "../components/BookList";
import GenreMenu from "../components/GenreMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <GenreMenu />
      <BookList />
      <Cart />
    </div>
  );
};

export default Home;
