export interface Habit {
	id: string;
	name: string;

	// Save the date when I completed the habit.
	// If it is null, it means that the habit was not completed 
	completedAt: Date | null;
}
