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
          <span>Ingredients: </span>
          {props.content.ingredient1}, {props.content.ingredient2},{" "}
          {props.content.ingredient3}, {props.content.ingredient4},{" "}
          {props.content.ingredient5}
        </div>
        <div className="drinkInstructions">
          <span>Instructions: </span>
          {props.content.instructions}
        </div>
        <div className="glass">
          <span>Served In: </span>
          {props.content.glass}
        </div>
      </div>
    </div>
  );
}

export default Cocktail;
