import * as actions from '../actions/actionTypes';

const initialState = {
  monthlyBudget: 0
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_BUDGET:
      return {
        monthlyBudget: action.payload
      };
    default:
      return state;
  }
};

export default budgetReducer;
