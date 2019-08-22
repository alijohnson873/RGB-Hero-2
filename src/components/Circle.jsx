import React, { Component } from "react";
import styles from "./Circle.module.scss";

class Circle extends Component {
  state = {};
  render() {
    return (
      <section
        onClick={() => {
          this.props.alertOnCorrectClick(this.props.id);
        }}
        className={styles.circle}
        style={{
          backgroundColor: this.props.rgbValue
        }}
      />
    );
  }
}

export default Circle;
