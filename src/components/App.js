import React, { Component } from 'react';
import {connect} from 'react-redux';

import {increment, decrement, reset} from '../actions';

class App extends Component {
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
        <button onClick={props.reset}>Reset</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({value: state.count.value})

const mapDispatchToProps = ({increment, decrement, reset})
// 上記の記述と同じ
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

export default connect(mapStateToProps, mapDispatchToProps)(App)