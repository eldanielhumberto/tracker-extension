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

	return (
		<AppContext.Provider value={{ habits, saveHabitInStorage }}>
			{children}
		</AppContext.Provider>
	);
}

export default AppProvider;
