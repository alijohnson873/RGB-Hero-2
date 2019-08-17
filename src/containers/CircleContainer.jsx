import React, { Component } from "react";
// import styles from "./CircleContainer.module.scss"
import Circle from "../components/Circle";

class CircleContainer extends Component {
  state = { allRgbValues: [] };
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

  componentDidMount() {
    this.setState({
      allRgbValues: this.fillRgbMultiArr()
    });
  }

  render() {
    console.log(this.state.allRgbValues[0]);
    return (
      <section>
        {this.rgbMultiArr.map((rgbSingle, index) => (
          <Circle rgbValue={rgbSingle} key={index} />
        ))}
      </section>
    );
  }
}

export default CircleContainer;
