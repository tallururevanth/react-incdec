import React from 'react';

class IncDec extends React.Component {
  constructor() {
    super();
    this.state = {
      a: 0,
      b: 0,
      value: 0,
    };
  }
  aInc = () => {
    this.setState({ a: this.state.a + 1 });
  };
  aDec = () => {
    this.setState({ a: this.state.a - 1 });
  };
  bChange = (e) => {
    this.setState({ value: e.target.value });
  };
  bInc = () => {
    this.setState({ b: this.state.b + Number(this.state.value) });
  };
  bDec = () => {
    this.setState({ b: this.state.b - Number(this.state.value) });
  };
  reset = () => {
    this.setState({ a: 0, b: 0, value: 0 });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Increment Decrement Counter</h1>
        <div class="counters">
          <div class="a">
            <h2>
              <u>A</u>
            </h2>
            <h3>{this.state.a}</h3>
            <button onClick={this.aInc}>Increment</button>
            <button onClick={this.aDec}>Decrement</button>
          </div>
          <div class="b">
            <h2>
              <u>B</u>
            </h2>
            <h3>{this.state.b}</h3>
            <button onClick={this.bInc}>Increment</button>
            <input
              type="number"
              name="input"
              value={this.state.value}
              onChange={this.bChange}
            />
            <button onClick={this.bDec}>Decrement</button>
          </div>
        </div>
        <div class="total">
          <h2>
            <u>Total</u>
          </h2>
          <h2>{this.state.a + this.state.b}</h2>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default IncDec;
