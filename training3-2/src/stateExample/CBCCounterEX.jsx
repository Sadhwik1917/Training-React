import React, { Component } from 'react'
import './CounterEx.css';

export default class CounterEX extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        }
    }
    increment=()=>{
        this.setState({counter: this.state.counter + 1})
    }

    decrement=()=>{
        this.setState({counter: this.state.counter - 1})
    }

    reset=()=>{
        this.setState({counter: 0})
    }
  render() {
    return (
      <div className='Counter'>
        <h1>Count: {this.state.counter}</h1>
        <div className='btn'>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}
