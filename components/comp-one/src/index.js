import React from "react";

class CompOne extends React {
  constructor(p) {
    super(p);
    this.state = {
      count: 0
    };
    window.updateWidgetState = this.updateState;
  }
  updateState () {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div>
        <h3>Not a component {this.state.count}</h3>
        <p>
          <i>Transpiled On-The-Fly</i>
        </p>
        <code>&#123;"main:src": "src/index.js"&#125;</code>
      </div>
    );
  }
}

export default CompOne;
