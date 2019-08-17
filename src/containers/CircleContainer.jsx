import React, { Component } from "react";
import styles from "./CircleContainer.module.scss";
import Circle from "../components/Circle";

class CircleContainer extends Component {
  state = { allRgbValues: [], indexOfShownRgb: 1, testState: "" };

  makeSingleRgbArr = () => {
    let randRGBGen = () => Math.ceil(Math.random() * 255);
    return [randRGBGen(), randRGBGen(), randRGBGen()];
  };
  makeMultiRgbArr = numberOfArr => {
    let multiRgbArr = [];
    for (let i = 0; i < numberOfArr; i++) {
      multiRgbArr.push(this.makeSingleRgbArr());
    }
    return multiRgbArr;
  };
  //generate random number for rgbIndex between 0 and rgb index length ;
  genRandIndexNumber = arr => Math.floor(Math.random() * arr.length);

  //makes rgb string from array //remember to add rgba value too
  makeRgbString = arr => `rgb(${arr[0]}, ${arr[1]}, ${arr[2]}, 0.5)`;

  componentWillMount() {
    console.log("will mount");
    this.setState({
      allRgbValues: this.makeMultiRgbArr(5)
    });
  }
  //why do I need both above and below?
  componentDidMount() {
    this.setState({
      indexOfShownRgb: this.genRandIndexNumber(this.state.allRgbValues)
    });
  }

  alertOnWin = () => {};

  render() {
    console.log(this.state.allRgbValues);
    console.log(this.state.indexOfShownRgb);

    return (
      <React.Fragment>
        <header>
          <h1>RGB HERO 2</h1>
        </header>
        <section>
          {this.state.allRgbValues.map((rgbSingle, index) => (
            <Circle
              rgbValue={rgbSingle}
              key={index}
              makeRgbString={this.makeRgbString}
            />
          ))}
        </section>
        <h2>
          {this.makeRgbString(
            this.state.allRgbValues[this.state.indexOfShownRgb]
          )}
        </h2>
        <p>Index value: {this.state.indexOfShownRgb}</p>
      </React.Fragment>
    );
  }
}

export default CircleContainer;
