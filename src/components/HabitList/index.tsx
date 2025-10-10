import { useHabits } from '../../hooks/useHabits';
import HabitTrackerItem from './HabitTrackerItem';

function HabitList() {
	const { habits } = useHabits();

	return (
		<div className='flex flex-col justify-center p-4'>
			{habits ? (
				<>
					<p className='text-base font-light mb-4'>
						Para seguir la racha necesitas completar todos tus
						habitos
					</p>
					<div className='flex flex-col gap-3'>
						{habits.map((habit) => (
							<HabitTrackerItem
								id={habit.id}
								name={habit.name}
								key={habit.name} // TODO: This must change.
							/>
						))}
					</div>
				</>
			) : (
				<div className='flex flex-col items-center gap-3'>
					<p className='text-base font-bold'>
						NO TIENES NINGUN HABITO AGREGADO
					</p>
					<p className='text-base font-light'>
						Crea un nuevo habito en <b>Administrar habitos</b>
					</p>
				</div>
			)}
		</div>
	);
}

export default HabitList;
