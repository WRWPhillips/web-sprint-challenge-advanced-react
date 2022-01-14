import React, { Component } from "react";
import axios from "axios";
import crazyFrog from "../assets/crazyFrog.jpeg";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  state = {
    plants:[]
  }
  componentDidMount = () => {
    axios.get('http://localhost:3333/plants'
    ).then((resp) => {
      console.log(resp);
      this.setState({
        ...this.state,
        plants: resp.data
       });
    });
  }
  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <main className="plant-list">
        {this.state.plants.map((plant) => (
          <div className="plant-card" key={plant.id} data-testid="plant-card">
            <img className="plant-image" src={crazyFrog} width="50%" alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
