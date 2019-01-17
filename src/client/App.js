import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions/actionCreators';

import './assets/style/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <p>hello there</p>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    count: state.test.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(actions.increment());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
