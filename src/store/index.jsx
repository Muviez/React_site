import { createStore } from 'redux';
import rootReducer from '../reducers/index.jsx'
 
// import reducer from '../reducers';
// import state from './state';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //reducer, state
// console.log(store.getState().loginUser.isLogged)

export default store