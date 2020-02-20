import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Container from "./Container";

class App extends Component {
  constructor() {
    super();
    this.state = {
      drinkName: "",
      ingredients: [],
      measurements: [],
      image: ""
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="window">
          <Container />
        </div>
      </div>
    );
  }
}
export default App;
