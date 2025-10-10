import { Habit } from '../../interfaces/Habit';

function HabitTrackerItem({ name }: Habit) {
	return (
		<div className='flex items-center gap-3'>
			<div className='w-8 h-8 border-4 rounded-xl border-[#232946]'></div>
			<p className='text-2xl font-bold'>{name}</p>
		</div>
	);
}

export default HabitTrackerItem;
