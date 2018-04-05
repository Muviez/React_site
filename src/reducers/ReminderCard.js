function funcReminderReducer (state = {}, action) {
    switch(action.type) {
        case 'ADD_REMINDER_CARD':
            return {
                id: action.id,
                title: action.title,
                reason: action.reason,
                towhom: action.towhom,
                datetime: action.datetime,
                frequency: action.frequency,
                remindForWeek: action.remindForWeek,
                remindForMonth: action.remindForMonth,
                remindForThreeMonth: action.remindForThreeMonth
            };
        case "EDIT_REMINDER_CARD":
            if (state.id !== action.id) {
                return state;
            }
    
            return Object.assign({}, state, {
                title: action.title,
                reason: action.reason,
                towhom: action.towhom,
                datetime: action.datetime,
                frequency: action.frequency,
                remindForWeek: action.remindForWeek,
                remindForMonth: action.remindForMonth,
                remindForThreeMonth: action.remindForThreeMonth
            });
        default:
            return state;
    }
}

export default function reminderReducer(state = [{id: 1, title: "Birthday", reason: "birthday", towhom: "mother", datetime: "06/04/2018 0:00", frequency: "every-year", remindForWeek: true}], action) {
    switch(action.type) {
        case 'ADD_REMINDER_CARD':
            return [...state, funcReminderReducer(undefined, action)];

        case 'EDIT_REMINDER_CARD':
            return state.map(reminder => funcReminderReducer(reminder, action));

        default:
            return state;
    }
}