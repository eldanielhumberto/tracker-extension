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
		setHabits((prev) => {
			const newHabits = [...prev, habit];

			chrome.storage.local.set({ habits: newHabits });
			return newHabits;
		});
	};

	const updateHabitInStorage = (habitId: string, newHabitName: string) => {
		setHabits((prev) => {
			const updatedHabits = prev.map((h) =>
				h.id === habitId ? { ...h, name: newHabitName } : h
			);

			chrome.storage.local.set({ habits: updatedHabits });
			return updatedHabits;
		});
	};

	const removeHabitFromStorage = (habitId: string) => {
		setHabits((prev) => {
			const habitsWithoutOneHabit = prev.filter(
				(habit) => habit.id !== habitId
			);

			chrome.storage.local.set({ habits: habitsWithoutOneHabit });
			return habitsWithoutOneHabit;
		});
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
