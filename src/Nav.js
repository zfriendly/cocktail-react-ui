import React, { Component } from "react";

function Nav(props) {
  return (
    <nav className="nav">
      {props.content.map((something, i) => (
        <div
          onClick={e => props.displayCocktail(i)}
          key={i}
          className="cocktail"
        >
          {something.name.toUpperCase()}
        </div>
      ))}
    </nav>
  );
}
export default Nav;
