interface Day {
	date: Date;
	dayName: string;
}

export function getCurrentWeek(): Day[] {
	const today = new Date();
	const dayOfWeek = today.getDay();
	const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

	const monday = new Date(today);
	monday.setDate(today.getDate() + mondayOffset);

	const week: Day[] = [];
	for (let i = 0; i < 7; i++) {
		const date = new Date(monday);
		date.setDate(monday.getDate() + i);

		const dayName = new Intl.DateTimeFormat('es-MX', { weekday: 'long' })
			.format(date)
			.charAt(0)
			.toUpperCase();

		week.push({ date, dayName });
	}

	return week;
}
