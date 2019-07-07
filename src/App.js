import React, { Component } from 'react';
import './App.css';
import Parent from './components/parentToChild/parent';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> {this.props.title}</h1>
        <Parent changeTheWorld={"CHANGE"}
          keepTheWorldSame={"SAME"}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.title
  }
}

export default connect(mapStateToProps)(App);
