import { useEffect, useState } from 'react';
import { Habit } from '../interfaces/Habit';

export function useHabits() {
	const [habits, setHabits] = useState<Habit[]>([]);

	useEffect(() => {
		chrome.storage.local.get('habits', (result) => {
			setHabits(result.habits || []);
		});
	}, []);

	const saveHabitInStorage = (newHabit: Habit) => {
		chrome.storage.local.set({ habits: [...habits, newHabit] });
		setHabits((prev) => [...prev, newHabit]);
	};

	return { habits, saveHabitInStorage };
}
