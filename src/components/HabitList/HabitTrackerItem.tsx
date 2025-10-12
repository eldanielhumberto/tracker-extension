import { Check } from 'lucide-react';
import { Habit } from '../../interfaces/Habit';
import { useHabits } from '../../hooks/useHabits';

function HabitTrackerItem({ habit }: { habit: Habit }) {
	const { completeHabitInStorage } = useHabits();

	return (
		<div className='flex items-center gap-3'>
			<div className='w-8 h-8 border-4 rounded-xl border-[#232946]' onClick={() => completeHabitInStorage(habit.id)}>
				{habit.isCompleted ? <Check /> : null}
			</div>
			<p className='text-2xl font-bold'>{habit.name}</p>
		</div>
	);
}

export default HabitTrackerItem;
