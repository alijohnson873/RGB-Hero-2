import React, { Component } from "react";
import styles from "./CircleContainer.module.scss";
import Circle from "../components/Circle";

class CircleContainer extends Component {
  state = { allRgbValues: [], indexOfShownRgb: 1, score: 0 };

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

  genRandIndexNumber = arr => Math.floor(Math.random() * arr.length);

  alertOnCorrectClick = id => {
    if (id === this.state.indexOfShownRgb) {
      alert("Correct!");
      this.setState({
        score: (this.state.score += 1),
        allRgbValues: this.makeMultiRgbStringArr(5)
      });
    } else {
      alert("WRONG!");
      this.setState({
        score: (this.state.score -= 1)
        // allRgbValues: this.makeMultiRgbStringArr(5)
      });
    }
  };

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
    // console.log(this.makeRandomRgbString());
    return (
      <React.Fragment>
        <header>
          <h1>RGB HERO 2</h1>
        </header>
        <section>
          {this.state.allRgbValues.map((rgbSingle, index) => (
            <Circle
              rgbValue={rgbSingle}
              id={index}
              alertOnCorrectClick={this.alertOnCorrectClick}
            />
          ))}
        </section>
        <h2>{this.state.allRgbValues[this.state.indexOfShownRgb]}</h2>
        <h2>Score: {this.state.score}</h2>
        {/* <p>IndexOfShownRGB: {this.state.indexOfShownRgb}</p> */}
      </React.Fragment>
    );
  }
}

export default CircleContainer;
