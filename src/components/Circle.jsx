import React, { Component } from "react";
import styles from "./Circle.module.scss";

class Circle extends Component {
  state = {};

  makeRgbString = () =>
    `rgb(${this.props.rgbValue[0]}, ${this.props.rgbValue[1]}, ${
      this.props.rgbValue[2]
    })`;

  render() {
    return (
      <section
        className={styles.circle}
        style={{ backgroundColor: this.makeRgbString() }}
      />
    );
  }
}

export default Circle;
