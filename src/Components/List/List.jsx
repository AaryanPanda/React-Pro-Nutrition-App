import { Component } from "react";
import "./List.css"


export default class List extends Component {
  render() {
    return (
      <>
        <div id="calculations">
          <span >{this.props.count}</span> <span>{this.props.name}</span> ={" "}
          <span>{this.props.totalAmount}</span> Calories
        </div>
        <button id="reset" onClick={this.props.handleReset}>Reset</button>
      </>
    );
  }
}
