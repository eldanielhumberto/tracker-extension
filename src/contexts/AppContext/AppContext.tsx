import { createContext } from 'react';
import { Habit } from '../../interfaces/Habit';

export interface AppContextData {
	habits: Habit[];
	saveHabitInStorage: (habit: Habit) => void;
	updateHabitInStorage: (habitId: string, newHabitName: string) => void;
	removeHabitFromStorage: (habitId: string) => void;
	completeHabitInStorage: (habitId: string) => void;
}

export const defaultValues: AppContextData = {
	habits: [],
	saveHabitInStorage: () => {},
	updateHabitInStorage() {},
	removeHabitFromStorage() {},
	completeHabitInStorage() {},
};

export const AppContext = createContext(defaultValues);
