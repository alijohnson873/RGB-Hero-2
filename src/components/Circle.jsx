import React, { Component } from "react";
import styles from "./Circle.module.scss";

class Circle extends Component {
  state = {};
  render() {
    return (
      <section
        onClick={() => console.log(this.props.rgbValue + this.props.index)}
        className={styles.circle}
        style={{
          backgroundColor: this.props.rgbValue
        }}
      />
    );
  }
}

export default Circle;
