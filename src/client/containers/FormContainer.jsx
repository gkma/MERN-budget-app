import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actionCreators';
import BudgetSetter from '../components/BudgetSetter.jsx';

import '../assets/styles/FormContainer.css';

class FormContainer extends React.Component {
  render() {
    const { monthlyBudget, setBudget } = this.props;
    return (
      <div id="form-container">
        <BudgetSetter budget={monthlyBudget} setBudget={setBudget} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  monthlyBudget: state.budget.monthlyBudget
});

const mapDispatchToProps = dispatch => ({
  setBudget: e => {
    dispatch(actions.setBudget(e.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
