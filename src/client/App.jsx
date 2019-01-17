import React from 'react';

import Header from './components/Header.jsx';
import FormContainer from './containers/FormContainer.jsx';

import './assets/styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <FormContainer />
      </div>
    );
  }
}

export default App;
