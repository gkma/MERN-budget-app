import { createStore } from 'redux';
// import redux-devtools-extension

import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

export default store;
