import React, { Component } from "react";
import styles from "./Circle.module.scss";
import posed from "react-pose";


const CirclePose = posed.div({
  // visible: { scale: 1, x: +100, opacity: 1,  transition: {
  //   type: 'spring',
  //   stiffness: 20,
  //   damping: 0
  // }, ease: 'linear' },
  // hidden: {  scale: 0.8, x: -100, opacity: 0.3, transition: { duration: 3000 }, ease: 'linear' }
});




class Circle extends Component {

  state = { isClicked: false , isVisible: true}

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


  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  render() {
    const modalStyleOnClick = this.state.isClicked? styles.modal : styles.displayNone
    return (
      <React.Fragment>
        
        <CirclePose pose={this.state.isVisible ? "visible" : "hidden"}
      onClick={this.handleCircleClick}
      className={ styles.circle }
      style={{
      backgroundColor: this.props.rgbValue
      }} />


        {/* <section
      onClick={this.handleCircleClick}
      className={ styles.circle }
      style={{
      backgroundColor: this.props.rgbValue
      }}
      />  */}
      
      <div className={modalStyleOnClick}
      onClick={this.modalClickToClose} style={{
      backgroundColor: this.props.rgbValue,
      }} > <h2>{this.props.displayMessage}</h2></div></React.Fragment>
    );
  }
}

export default Circle;
