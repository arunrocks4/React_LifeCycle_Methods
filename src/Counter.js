import React, { Component } from "react";

// const ErrorComponent = () => <div>{props.ignore}</div>;

class Counter extends Component {
  constructor(props) {
    console.log("constructor", props);
    super(props);
    this.state = {
      counter: 0,
      seeds: 0
    };
    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }
  static getDerivedStateFromProps(props, state) {
    console.log(
      "GetDereivedStateFromProps copy the props to state. & its static and called first then any other state"
    );
    console.log("----------------------");
    if (props.seeds && state.seeds !== props.seeds) {
      return {
        seeds: props.seeds,
        counter: props.seeds
      };
    }
    return null;
  }
  componentDidMount() {
    console.log("ComponentDidMount called after render");
    console.log("--------------");
  }
  componentDidUpdate(prevState, prevProps, snapShot) {
    console.log("ComponentDidUpdate called after render and Updated");
    console.log("-------------");
  }
  componentWillUnmount() {
    console.log("ComponentWillUnmount when component removed");
    console.log("---------------");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "ShouldComponentUpdate is called (performance)when there in on need to called render ifnot canged any thing"
    );
    console.log("-------------------------");
    if (
      nextProps.ignoreProps &&
      this.state.ignoreProps !== nextProps.ignoreProps
    ) {
      return false;
    }
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log(
      "GetSnapshotBeforeUpdate is used to store the list/text area data when scorlled and save it when componentDidUpdate"
    );
  }
  componentDidCatch(error, info) {
    console.log("ComponentDidCatch is used to catch the error");
    this.setState({
      error,
      info
    });
  }
  render() {
    console.log("render");
    // if (this.state.error) {
    //   return (
    //     <div>We have encountered an error!{this.state.error.message} </div>
    //   );
    // }
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>decrement</button>
        <div>Counter:{this.state.counter}</div>
        {/* <ErrorComponent /> */}
      </div>
    );
  }
}

export default Counter;
