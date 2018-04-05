let nextId = 1;

export const AddCard = ({ title, reason, towhom, datetime, frequency, remindForWeek, remindForMonth, remindForThreeMonth }) => {
    return {
        type: "ADD_REMINDER_CARD",
        id: nextId++,
        title: title,
        reason: reason,
        towhom: towhom,
        datetime: datetime,
        frequency: frequency,
        remindForWeek: remindForWeek,
        remindForMonth: remindForMonth,
        remindForThreeMonth: remindForThreeMonth
    }
}

export const EditCard = (id, { title, reason, towhom, datetime, frequency, remindForWeek, remindForMonth, remindForThreeMonth }) => {
	return {
        type: "EDIT_REMINDER_CARD",
        id,
        title: title,
        reason: reason,
        towhom: towhom,
        datetime: datetime,
        frequency: frequency,
        remindForWeek: remindForWeek,
        remindForMonth: remindForMonth,
        remindForThreeMonth: remindForThreeMonth
	};
}