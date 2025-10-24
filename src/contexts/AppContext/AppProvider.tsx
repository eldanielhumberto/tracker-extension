import { PropsWithChildren, useEffect, useState } from 'react';

import { AppContext, defaultValues } from './AppContext';
import { IHabit } from '../../interfaces/IHabit';

function AppProvider({ children }: PropsWithChildren) {
	const [habits, setHabits] = useState<IHabit[]>(defaultValues.habits);
	const [superStreaks, setsuperStreaks] = useState<Date[]>(
		defaultValues.superStreaks
	);

	useEffect(() => {
		chrome.storage.local.get('habits', (result) => {
			setHabits(result.habits || []);
		});

		chrome.storage.local.get('superStreaks', (result) => {
			setsuperStreaks(result.superStreaks || []);
		});
	}, []);

	const saveHabitInStorage = (habit: IHabit) => {
		chrome.storage.local.set({ habits: [...habits, habit] });
		setHabits((prev) => [...prev, habit]);
	};

	const updateHabitInStorage = (habitId: string, newHabitName: string) => {
		setHabits((prev) =>
			prev.map((h) =>
				h.id === habitId ? { ...h, name: newHabitName } : h
			)
		);
		chrome.storage.local.set({
			habits: habits.map((h) =>
				h.id === habitId ? { ...h, name: newHabitName } : h
			),
		});
	};

	const removeHabitFromStorage = (habitId: string) => {
		const habitsWithoutOneHabit = habits.filter(
			(habit) => habit.id !== habitId
		);

		chrome.storage.local.set({ habits: habitsWithoutOneHabit });
		setHabits((prev) => prev.filter((habit) => habit.id !== habitId));
	};

	const completeHabitInStorage = (habitId: string) => {
		setHabits((prev) => {
			const updatedHabits = prev.map((h) =>
				h.id === habitId ? { ...h, isCompleted: !h.isCompleted } : h
			);

			// Check if all tasks have been completed
			if (updatedHabits.every((h) => h.isCompleted)) {
				console.log('All completed');
			}

			// Save in storage
			chrome.storage.local.set({ habits: updatedHabits });

			return updatedHabits;
		});
	};

	return (
		<AppContext.Provider
			value={{
				habits,
				superStreaks,
				saveHabitInStorage,
				removeHabitFromStorage,
				updateHabitInStorage,
				completeHabitInStorage,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export default AppProvider;
