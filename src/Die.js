import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
    val: 5
  }
  constructor(props) {
    super(props);
    this.state = {
      isRolling: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    const { numberWords, locked, val, disabled, isRolling } = this.props;

    let classes = `Die fas fa-5x fa-dice-${numberWords[val - 1]} ${isRolling && !locked ? 'Die-rolling' : ''}`;
    if (locked) classes += ' Die-locked';

    return (
      <i
        className={classes}
        onClick={this.handleClick}
        disabled={disabled}
      />
    );
  }
}

export default Die;
