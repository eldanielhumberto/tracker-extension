import { useEffect, useState } from 'react';
import { Habit } from '../interfaces/Habit';

export function useHabits() {
	const [habits, setHabits] = useState<Habit[]>();

	useEffect(() => {
		chrome.storage.local.get('habits', (result) => {
			console.log('Mis habits: ', result.habits);
			setHabits(result.habits);
		});
	}, []);

	return { habits };
}
