import { getCurrentWeek } from '../utils/getCurrentWeek';
import { formatDate } from '../utils/formatDate';
import { useHabits } from '../hooks/useHabits';

function SuperStreakList() {
	const { superStreaks } = useHabits();

	return (
		<div className='flex items-center justify-center gap-6'>
			{getCurrentWeek().map((d) => (
				<div className='flex flex-col items-center'>
					<h1 className='text-2xl font-bold'>
						{d.dayName}{' '}
						{superStreaks.find((i) => i === formatDate(d.date)) &&
							'*'}
					</h1>
					<div className='w-8 h-8 border-4 border-[#232946] rounded-full'></div>
				</div>
			))}
		</div>
	);
}

export default SuperStreakList;
