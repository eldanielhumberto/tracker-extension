import { createContext } from 'react';
import { Habit } from '../../interfaces/Habit';

export interface AppContextData {
	habits: Habit[];
	removeHabitFromStorage: (habitId: string) => void,
	saveHabitInStorage: (habit: Habit) => void;
}

export const defaultValues: AppContextData = {
	habits: [],
	saveHabitInStorage: () => { },
	removeHabitFromStorage() { },
};

export const AppContext = createContext(defaultValues);
