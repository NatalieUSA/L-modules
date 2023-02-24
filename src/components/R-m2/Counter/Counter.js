// https://docs.google.com/spreadsheets/d/1TsSvcYHR-sqIe_KjobYW3BEvfjRm8vYanCCdVCvff_I/edit?usp=sharing

import './Counter.css';
import Controls from './Controls';
import Value from './Value';
import React, { Component } from 'react';

//import buttonStyles from '../../shared/components/Button/button.module.scss';

class Counter extends Component {
  static defaultProps = {
    initialValue: 667,
  };
  state = {
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  handleDecrement = () => {
    this.setState(prevState => {
      return { value: prevState.value - 1 };
    });
  };
  render() {
    return (
      <div className="Counter">
        <h3>Counter</h3>
        <Value value={this.state.value} />
        {/* <span className="Counter__value">{this.state.value}</span> */}
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        {/* <div className="Counter__controls">
          <Button type="button" onClick={this.handleIncrement}>
            увеличить на 1
          </Button>
          <Button type="button" onClick={this.handleDecrement}>
            уменьшить на 1
          </Button>
        </div> */}
      </div>
    );
  }
}
export default Counter;
