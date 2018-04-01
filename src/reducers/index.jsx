import { combineReducers } from 'redux';

import loginUser from './user.js';
import userProfile from "./userProfile.js";
import addReminder from "./addReminder.js";

const rootReducer = combineReducers({
   loginUser,
   userProfile,
   addReminder
})

export default rootReducer;