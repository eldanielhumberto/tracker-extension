import { createContext } from 'react';
import { IHabit } from '../../interfaces/IHabit';

export interface AppContextData {
	habits: IHabit[];
	superStreaks: string[];
	saveHabitInStorage: (habit: IHabit) => void;
	updateHabitInStorage: (habitId: string, newHabitName: string) => void;
	removeHabitFromStorage: (habitId: string) => void;
	completeHabitInStorage: (habitId: string) => void;
}

export const defaultValues: AppContextData = {
	habits: [],
	superStreaks: [],
	saveHabitInStorage: () => {},
	updateHabitInStorage() {},
	removeHabitFromStorage() {},
	completeHabitInStorage() {},
};

export const AppContext = createContext(defaultValues);
