import React, { Component } from 'react';
// this function connects this react component to the redux store
// with this function you are able to call mapStateToProps(state)
// and mapDispatchToProps(dispatch)
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    // dispatching an action to the store, where its reducer will
    // return a value based on the type. can also accept a payload as an argument.
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }
  // event callback functions call the fns defined above
  // when these functions run, the action is dispatched to the store
  // when the store gets updated, a rerender is triggered.
  render() {
    console.log(this.props)
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>{this.props.items.length}</p>
      </div>
    );
  }
}

// this function takes state as an argument, and maps this piece of state from the store
// to the component's props.
const mapStateToProps = (state) => {
  // can return entire state object, or choose which piece of state
  // you want for this component.
  
  // return {
  //   items: state.items,
  //   users: state.users
  // }
  return state
}

export default connect(mapStateToProps)(App);
