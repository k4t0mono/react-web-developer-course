// get_visible_expenses

const get_visible_expenses = (expenses, { text, sort_by, start_date, end_date }) => {
	return expenses.filter((expense) => {
		const start_date_match = (typeof start_date !== 'number')
			|| (expense.created_at >= start_date);

		const end_date_match = (typeof end_date !== 'number')
			|| (expense.created_at <= end_date);

		const text_match = expense.description.toLowerCase()
			.includes(text.toLowerCase());

		return start_date_match && end_date_match && text_match;
	}).sort((a, b) => {
		if(sort_by === 'date')
			return a.created_at < b.created_at ? 1 : 0;

		if(sort_by === 'amount')
		return a.amount < b.amount ? 1 : 0;
	});
};

export default get_visible_expenses;