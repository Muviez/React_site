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
                remindForThreeMonth: action.remindForThreeMonth,
                gifts: []
            };
        case 'EDIT_REMINDER_CARD':
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
                remindForThreeMonth: action.remindForThreeMonth,
            });
        
        // case 'ADD_GIFT':
        //     if (state.id !== action.cid) {
        //         return state;
        //     }
    
        //     return Object.assign({}, state.gifts, {
        //         keyGift: action.id,
        //         idGift: action.id,
        //         cid: action.cid,
        //         category: action.category,
        //         item: action.item,
        //         count: action.count
        //     });

        default:
            return state;
    }
}

// function funcGiftReducer(state = {}, action) {
//     switch(action.type) {   
//         case 'ADD_GIFT':
//             if (state.id !== action.cid) {
//                 return state;
//             }
    
//             return {
//                 key: action.id,
//                 cid: action.cid,
//                 category: action.category,
//                 item: action.item,
//                 count: action.count
//             };

//         default:
//             return state;
//     }
// }

export default function reminderReducer(state = [{id: 1, title: "Birthday", reason: "birthday", towhom: "mother", datetime: "06/04/2018 0:00", frequency: "every-year", remindForWeek: true }], action) { //gifts: [ { idGift: 1, cid: 1, category: "flowers", item: "rose", count: 3 }, { idGift: 2, cid: 1, category: "toys", item: "constructor", count: 1 } ]
    switch(action.type) {
        case 'ADD_REMINDER_CARD':
            return [...state, funcReminderReducer(undefined, action)];

        case 'DELETE_REMINDER_CARD':
            const index = state.findIndex(reminder => reminder.id === action.id);
            return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
            ];

        case 'EDIT_REMINDER_CARD':
            return state.map(reminder => funcReminderReducer(reminder, action));

        // case 'ADD_GIFT':
        //     // return [...state[0].gifts, { key: action.id }];
        //     return state.map(state => funcReminderReducer(state, action));
        //     // funcReminderReducer(undefined, action)
        default:
            return state;
    }
}