import React, { Component } from "react";
import styles from "./CircleContainer.module.scss";
import Circle from "../components/Circle";

class CircleContainer extends Component {
  //need to update state with fillMultiArr equation
  state = { allRgbValues: [] };
  rgbArr = [];
  rgbArrCollection = [];
  randRGBGen = () => Math.ceil(Math.random() * 255);
  fillRgbArr = () => {
    return [this.randRGBGen(), this.randRGBGen(), this.randRGBGen()];
  };
  fillRgbMultiArr = () => {
    let newArr = [];
    for (let i = 0; i < 5; i++) {
      newArr.push(this.fillRgbArr());
    }
    return newArr;
  };
  rgbMultiArr = this.fillRgbMultiArr();

  //generate random number for rgbIndex between 0 and rgb index length ;
  randIndexNumber = () => Math.floor(Math.random() * this.rgbMultiArr.length);

  //makes rgb string from array
  makeRgbString = arr => `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;

  componentDidMount() {
    this.setState({
      allRgbValues: this.fillRgbMultiArr()
    });
  }

  render() {
    console.log(this.randIndexNumber());
    return (
      <React.Fragment>
        <header>
          <h1>RGB HERO 2</h1>
        </header>
        <section>
          {this.rgbMultiArr.map((rgbSingle, index) => (
            <Circle
              rgbValue={rgbSingle}
              key={index}
              makeRgbString={this.makeRgbString}
            />
          ))}
        </section>
        <h3>{this.makeRgbString(this.rgbMultiArr[this.randIndexNumber()])}</h3>
      </React.Fragment>
    );
  }
}

export default CircleContainer;
