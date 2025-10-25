import { getCurrentWeek } from '../utils/getCurrentWeek';
import { formatDate } from '../utils/formatDate';
import { useHabits } from '../hooks/useHabits';
import { Flame } from 'lucide-react';

function SuperStreakList() {
	const { superStreaks } = useHabits();
	const isStreak = (date: Date) =>
		superStreaks.find((i) => i === formatDate(date));

	return (
		<div className='flex items-center justify-center gap-6'>
			{getCurrentWeek().map((d) => (
				<div className='flex flex-col items-center'>
					<h1 className='text-2xl font-bold'>{d.dayName}</h1>
					<div className='flex items-center justify-center w-9 h-9 border-4 border-[#232946] rounded-full '>
						{isStreak(d.date) ? (
							<Flame className='text-red-400' />
						) : null}
					</div>
				</div>
			))}
		</div>
	);
}

export default SuperStreakList;
