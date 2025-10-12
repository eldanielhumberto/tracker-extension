import { PropsWithChildren, useEffect, useState } from 'react';

import { AppContext, defaultValues } from './AppContext';
import { Habit } from '../../interfaces/Habit';

function AppProvider({ children }: PropsWithChildren) {
	const [habits, setHabits] = useState<Habit[]>(defaultValues.habits);

	useEffect(() => {
		chrome.storage.local.get('habits', (result) => {
			setHabits(result.habits || []);
		});
	}, []);

	const saveHabitInStorage = (habit: Habit) => {
		chrome.storage.local.set({ habits: [...habits, habit] });
		setHabits((prev) => [...prev, habit]);
	};

	const updateHabitInStorage = (habitId: string, newHabitName: string) => {
		setHabits(prev => prev.map(h => h.id === habitId ? { ...h, name: newHabitName } : h));
		chrome.storage.local.set({ habits: habits.map(h => h.id === habitId ? { ...h, name: newHabitName } : h) });
	}

	const removeHabitFromStorage = (habitId: string) => {
		const habitsWithoutOneHabit = habits.filter((habit) => habit.id !== habitId);

		chrome.storage.local.set({ habits: habitsWithoutOneHabit })
		setHabits((prev) => prev.filter((habit) => habit.id !== habitId));
	}

	const completeHabitInStorage = (habitId: string) => {
		setHabits((prev) => prev.map(h => h.id === habitId ? { ...h, isCompleted: !h.isCompleted } : h));
		chrome.storage.local.set({ habits: habits.map(h => h.id === habitId ? { ...h, isCompleted: !h.isCompleted } : h) });
	}

	return (
		<AppContext.Provider value={{ habits, saveHabitInStorage, removeHabitFromStorage, updateHabitInStorage, completeHabitInStorage }}>
			{children}
		</AppContext.Provider>
	);
}

export default AppProvider;
