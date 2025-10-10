import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext/AppContext';

export function useHabits() {
	return useContext(AppContext);
}
