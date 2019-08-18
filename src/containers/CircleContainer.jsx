import React, { Component } from "react";
import styles from "./CircleContainer.module.scss";
import Circle from "../components/Circle";

class CircleContainer extends Component {
  state = { allRgbValues: [], indexOfShownRgb: 1 };

  makeRandomRgbString = () => {
    let rand255 = () => Math.ceil(Math.random() * 255);
    return `rgb(${rand255()}, ${rand255()}, ${rand255()})`;
  };
  makeMultiRgbStringArr = numberOfArr => {
    let multiRgbArr = [];
    for (let i = 0; i < numberOfArr; i++) {
      multiRgbArr.push(this.makeRandomRgbString());
    }
    return multiRgbArr;
  };

  //generate random number for rgbIndex between 0 and rgb index length ;
  genRandIndexNumber = arr => Math.floor(Math.random() * arr.length);

  //makes rgb string from array //remember to add rgba value too
  makeRgbString = arr => `rgb(${arr[0]}, ${arr[1]}, ${arr[2]}, 0.5 )`;

  componentWillMount() {
    this.setState({
      allRgbValues: this.makeMultiRgbStringArr(5)
    });
  }
  //why do I need both above and below?
  componentDidMount() {
    this.setState({
      indexOfShownRgb: this.genRandIndexNumber(this.state.allRgbValues)
    });
  }

  render() {
    // console.log(this.state.allRgbValues);
    // console.log(this.state.indexOfShownRgb);
    console.log(this.makeRandomRgbString());

    return (
      <React.Fragment>
        <header>
          <h1>RGB HERO 2</h1>
        </header>
        <section>
          {this.state.allRgbValues.map((rgbSingle, index) => (
            <Circle rgbValue={rgbSingle} key={index} />
          ))}
        </section>
        <h2>{this.state.allRgbValues[this.state.indexOfShownRgb]}</h2>
        <p>Index value: {this.state.indexOfShownRgb}</p>
      </React.Fragment>
    );
  }
}

export default CircleContainer;
