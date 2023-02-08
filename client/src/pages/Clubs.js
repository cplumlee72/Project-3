import React from "react";
import ClubsList from "../components/ClubsList";
import Cart from "../components/Cart";

const Clubs = () => {
  return (
    <div className="container">
      <ClubsList />
      <Cart />
    </div>
  );
};

export default Clubs;
