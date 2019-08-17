import React, { Component } from "react";
import styles from "./Circle.module.scss";

class Circle extends Component {
  state = {};
  render() {
    return (
      <section
        className={styles.circle}
        style={{
          backgroundColor: this.props.makeRgbString(this.props.rgbValue)
        }}
      />
    );
  }
}

export default Circle;
