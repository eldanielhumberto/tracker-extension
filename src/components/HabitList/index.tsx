import HabitTrackerItem from './HabitTrackerItem';

function HabitList() {
	return (
		<div className='flex flex-col justify-center p-4'>
			<p className='text-base font-light mb-4'>
				Para seguir la racha necesitas completar todos tus habitos
			</p>
			<div className='flex flex-col gap-3'>
				<HabitTrackerItem />
				<HabitTrackerItem />
				<HabitTrackerItem />
			</div>
		</div>
	);
}

export default HabitList;
