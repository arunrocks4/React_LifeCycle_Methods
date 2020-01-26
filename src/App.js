import React, { Component } from "react";
import Counter from "./Counter";
import Example2 from "./Example2";
import Example3 from "./Example3";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
      ignoreProps: 0,
      seeds: 40
    };
    this.mount = () => this.setState({ mount: true });
    this.unMount = () => this.setState({ mount: false });

    this.ignoreProps = () => this.setState({ ignoreProps: Math.random() });
    this.seedGenerator = () =>
      this.setState({ seeds: Number.parseInt(Math.random() * 100) });
  }
  render() {
    return (
      <div>
        <button onClick={this.mount} disabled={this.state.mount}>
          Mount
        </button>
        <button onClick={this.unMount} disabled={!this.state.mount}>
          UnMount
        </button>
        <button onClick={this.ignoreProps}>Ignore Props</button>
        <button onClick={this.seedGenerator}>Seed Generator</button>
        {this.state.mount ? (
          <Counter
            ignoreProps={this.state.ignoreProps}
            seeds={this.state.seeds}
          />
        ) : null}
        {this.state.mount ? <Example2 /> : null}
        {this.state.mount ? <Example3 /> : null}
      </div>
    );
  }
}

export default App;
