import React, { Component } from "react";
import styles from "./Circle.module.scss";

class Circle extends Component {
  state = { isClicked: false };

handleCircleClick = () => {
    this.props.alertOnCorrectClick(this.props.id);
    this.setState({
      isClicked: true
    });
  }

  modalClickToClose= () => {
    this.setState({
      isClicked: false
    });
  } 

  render() {
    const modalStyleOnClick = this.state.isClicked? styles.modal : styles.displayNone
    return (
      <React.Fragment><section
      onClick={this.handleCircleClick}
      className={ styles.circle }
      style={{
      backgroundColor: this.props.rgbValue
      }}
      /> <div className={modalStyleOnClick}
      onClick={this.modalClickToClose} style={{
      backgroundColor: this.props.rgbValue,
      }} > <h2>{this.props.displayMessage}</h2></div></React.Fragment>
    );
  }
}

export default Circle;
