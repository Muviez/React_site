// function funcGiftReducer (state = {}, action) {
//     switch(action.type) {
//         case 'ADD_GIFT':
//             return {
//                 id: action.id,
//                 category: action.category,
//                 item: action.item,
//                 count: action.count,
//                 cid: action.cardId
//             };
//         default:
//             return state;
//     }
// }

// export default function giftReducer(state = [{id: 1, category: "flowers", item: "rose", count: 1, cid: 1}], action) {
//     switch(action.type) {
//         case 'ADD_GIFT':
//             return [...state, funcGiftReducer(undefined, action)];

//         case 'DELETE_GIFT':
//             const index = state.findIndex(gift => gift.id === action.id);
//             return [
//                     ...state.slice(0, index),
//                     ...state.slice(index + 1)
//             ];

//         default:
//             return state;
//     }
// }