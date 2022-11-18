import React from "react";
import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";


const HomePage = () => {
  return (
    <div>
      <div>
        <Link to="/beers" style={{ textDecoration: "none", color: "#121414", textAlign: "center"}}>
          <img src={beers} alt="" />
          <h2>All Beers</h2>
          <p>You can see the beers list here</p>
        </Link>
      </div>
      <div>
        <Link
          to="/random-beer"
          style={{ textDecoration: "none", color: "#121414" }}
        >
          <img src={newBeer} alt="" />
          <h2>Random Beer</h2>
          <p>Search for a random beer here</p>
        </Link>
      </div>
      <div>
        <Link
          to="new-beer"
          style={{ textDecoration: "none", color: "#121414" }}
        >
          <img src={randomBeer} alt="" />
          <h2>New Beer</h2>
          <p>Make a new beer</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;