import * as actions from '../actions/actionTypes';

const initialState = {
  count: 0
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT_COUNT:
      return {
        count: state.count + 1
      };

    default:
      return state;
  }
};

export default testReducer;
