import { combineReducers } from 'redux';

import loginUser from './user.js';
import userProfile from "./userProfile.js";
import reminderReducer from "./ReminderCard.js";
import giftReducer from './Gift.js'
import cardIdReducer from './CardId.js'

const rootReducer = combineReducers({
   loginUser,
   userProfile,
   reminderReducer,
   giftReducer,
   cardIdReducer
})

export default rootReducer;