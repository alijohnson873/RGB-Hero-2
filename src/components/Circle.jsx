import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "./Circle.module.scss";

class Circle extends Component {
  state = {};
  render() {
    return (
      <section className={styles.circle}>
        <h1>I am a circle</h1>
      </section>
    );
  }
}

export default Circle;
