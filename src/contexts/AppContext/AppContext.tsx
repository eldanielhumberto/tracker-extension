import { createContext } from 'react';
import { Habit } from '../../interfaces/Habit';

export interface AppContextData {
	habits: Habit[];
	saveHabitInStorage: (habit: Habit) => void;
}

export const defaultValues: AppContextData = {
	habits: [],
	saveHabitInStorage: () => {},
};

export const AppContext = createContext(defaultValues);
