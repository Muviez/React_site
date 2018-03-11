import { combineReducers } from 'redux';

import loginUser from './user.js';
import userProfile from "./userProfile.js";

const rootReducer = combineReducers({
   loginUser,
   userProfile
})

export default rootReducer;