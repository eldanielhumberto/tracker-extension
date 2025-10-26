import { getCurrentWeek } from '../utils/getCurrentWeek';
import { formatDate } from '../utils/formatDate';
import { useHabits } from '../hooks/useHabits';
import { Flame, Github, Settings, Star } from 'lucide-react';

function SuperStreakList() {
	const { superStreaks } = useHabits();
	const isStreak = (date: Date) =>
		superStreaks.find((i) => i === formatDate(date));

	return (
		<div className='flex flex-col gap-4 px-4'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<Flame className='text-[#ff9090] w-10 h-10' fill='#FF6B6B' />
					<span className='text-5xl font-bold text-[#4A4A4A]'>{superStreaks.length}</span>
				</div>
				<div className='flex items-center gap-3'>
					<Settings className='w-8 h-8 text-[#4A4A4A] cursor-pointer'/>
					<Github className='w-8 h-8 text-[#4A4A4A] cursor-pointer'/>
				</div>
			</div>

			<div className='flex items-center justify-between gap-2'>
				{getCurrentWeek().map((d, index) => (
					<div key={index} className='flex flex-col items-center'>
						<div className={`w-14 h-24 rounded-xl border-2 border-[#4A4A4A] flex flex-col items-center justify-between py-2 ${
							isStreak(d.date) ? 'bg-[#FFB4B4]' : 'bg-white'
						}`}>
							<div className='h-4 flex items-center justify-center'>
								{isStreak(d.date) && (
									<Star className='w-4 h-4 text-[#ff9090]' fill='#FF6B6B' />
								)}
							</div>
							<span className='text-2xl font-bold text-[#4A4A4A]'>{d.dayName}</span>
							<span className='w-7 h-7 rounded-full border-2 border-[#4A4A4A] flex items-center justify-center text-sm font-semibold text-[#4A4A4A]'>
								{index + 1}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default SuperStreakList;
