import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Container from "./Container";
import Cocktail from "./Cocktail";

class App extends Component {
  constructor() {
    super();
    this.state = {
      drinks: [],
      tab: 0
    };
  }
  componentDidMount() {
    for (let i = 0; i < 4; i++) {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(res => res.json())
        .then(data => {
          let drink = {
            name: data.drinks[0].strDrink,
            image: data.drinks[0].strDrinkThumb,
            ingredient1: data.drinks[0].strIngredient1,
            ingredient2: data.drinks[0].strIngredient2,
            ingredient3: data.drinks[0].strIngredient3,
            ingredient4: data.drinks[0].strIngredient4,
            ingredient5: data.drinks[0].strIngredient5,
            instructions: data.drinks[0].strInstructions,
            glass: data.drinks[0].strGlass
          };
          let cocktails = this.state.drinks;
          cocktails.push(drink);
          this.setState({
            drinks: cocktails
          });
        });
    }
  }
  displayCocktail = index => {
    this.setState({ tab: index });
  };
  render() {
    if (!this.state.drinks.length) {
      return null;
    } else {
      return (
        <div>
          <Header />
          <div className="window">
            <Container
              displayCocktail={this.displayCocktail}
              drinkData={this.state.drinks}
              tab={this.state.tab}
            />
          </div>
        </div>
      );
    }
  }
}
export default App;
