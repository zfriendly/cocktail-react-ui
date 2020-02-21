import React, { Component } from "react";

function Cocktail(props) {
  let imageUrl = props.content.image;
  return (
    <div className="drinkInfo">
      <div
        className="drinkImage"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="drinkText">
        <div className="drinkName">
          <span>Cocktail: </span>
          {props.content.name}
        </div>
        <div className="drinkIngredient">
          <span>Main Ingredient: </span>
          {props.content.ingredient}
        </div>
        <div className="drinkInstructions">
          <span>Instructions: </span>
          {props.content.instructions}
        </div>
      </div>
    </div>
  );
}

export default Cocktail;
