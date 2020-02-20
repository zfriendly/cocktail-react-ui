import React, { Component } from "react";
import Nav from "./Nav";
import Cocktail from "./Cocktail";

function Container(props) {
  let list = props.drinkData.map(data => <Cocktail content={data} />);
  return (
    <div className="container">
      <Nav displayCocktail={props.displayCocktail} content={props.drinkData} />
      <div>{list[props.tab]}</div>
    </div>
  );
}
export default Container;
