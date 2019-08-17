import React, { Component } from "react";
// import styles from "./CircleContainer.module.scss"
import Circle from "../components/Circle";

class CircleContainer extends Component {
  state = { multiArr: [] };
  rgbArr = [];
  rgbArrCollection = [];
  randRGBGen = () => Math.ceil(Math.random() * 255);
  fillRgbArr = () => {
    return [this.randRGBGen(), this.randRGBGen(), this.randRGBGen()];
  };
  fillRgbMultiArr = () => {
    let newArr = [];
    for (let i = 0; i < 3; i++) {
      newArr.push(this.fillRgbArr());
    }
    return newArr;
  };

  rgbMultiArr = this.fillRgbMultiArr();

  render() {
    return (
      <section>
        <Circle rgbValue={this.rgbMultiArr[0]} />
      </section>
    );
  }
}

export default CircleContainer;
