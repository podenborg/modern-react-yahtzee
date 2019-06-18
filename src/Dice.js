import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
  render() {
    return <div className="Dice">
      {this.props.dice.map((d, idx) =>
        <Die handleClick={this.props.handleClick}
          val={d}
          idx={idx}
          key={idx}
          disabled={this.props.disabled}
          locked={this.props.locked[idx]}
          isRolling={this.props.isRolling} 
          />
      )}
    </div>
  }
}

export default Dice;