import React from 'react';
import '../assets/styles/BudgetSetter.css';

const BudgetSetter = props => {
  const { budget, setBudget } = props;
  return (
    <div id="set-budget">
      <h4>Enter monthly budget below</h4>
      <input
        type="text"
        placeholder="Enter monthly budget"
        onChange={setBudget}
      />
      <h5>You entered ${budget ? budget : 0}.00</h5>
    </div>
  );
};

export default BudgetSetter;
