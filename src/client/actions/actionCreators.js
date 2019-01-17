import * as actions from './actionTypes';

// export const increment = () => ({
//   type: actions.INCREMENT_COUNT
// });

export const setBudget = input => ({
  type: actions.SET_BUDGET,
  payload: input
});
