import { combineReducers } from 'redux';

import loginUser from './user.js';
import userProfile from "./userProfile.js";
import reminderReducer from "./ReminderCard.js";

const rootReducer = combineReducers({
   loginUser,
   userProfile,
   reminderReducer
})

export default rootReducer;