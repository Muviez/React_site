function todoAddReminder (state = {}, action) {
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
        default:
            return state;
    }
}

export default function addReminder(state = [{id: 1, title: "Birthday", reason: "birthday", towhom: "mother", datetime: "06/04/2018 0:00"}], action) {
    switch(action.type) {
        case 'ADD_REMINDER_CARD':
            return [...state, todoAddReminder(undefined, action)];
        default:
            return state;
    }
}