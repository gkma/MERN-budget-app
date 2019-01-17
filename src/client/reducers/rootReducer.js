import { combineReducers } from 'redux';

// import testReducer from './testReducer';
import budgetReducer from './budgetReducer';

const rootReducer = combineReducers({
  // test: testReducer
  budget: budgetReducer
});

export default rootReducer;
