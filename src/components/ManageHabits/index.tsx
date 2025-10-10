import { Dispatch, FormEvent, SetStateAction } from 'react';
import { MoveLeft } from 'lucide-react';

import { useHabits } from '../../hooks/useHabits';
import HabitManagerItem from './HabitManagerItem';
import Divider from '../shared/Divider';

interface Props {
	setIsManageMode: Dispatch<SetStateAction<boolean>>;
}

function ManageHabits({ setIsManageMode }: Props) {
	const { habits, saveHabitInStorage } = useHabits();

	const saveHabit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const habitName = e.currentTarget.habit.value;

		saveHabitInStorage({ id: 'test', name: habitName });
	};

	return (
		<div className='absolute size-full z-10 bg-white flex gap-5 flex-col'>
			<button
				onClick={() => setIsManageMode(false)}
				className='flex items-center gap-2 font-medium text-2xl mx-4 mt-5'
			>
				<MoveLeft /> Regresar
			</button>
			<Divider />

			{/*=== NEW HABIT FORM ===*/}
			<form className='flex gap-2 px-4' onSubmit={saveHabit}>
				<input
					type='text'
					name='habit'
					className='border border-[#232946] rounded w-full p-1 px-4 text-lg'
					placeholder='Mi habito...'
				/>
				<button className='bg-[#232946] rounded text-white px-5 font-medium text-lg'>
					Agregar
				</button>
			</form>

			{/*=== HABIT LIST ===*/}
			<div className='flex flex-col gap-3 px-4'>
				{habits ? (
					habits.map((habit) => (
						<HabitManagerItem
							id={habit.id}
							name={habit.name}
							key={habit.name} // TODO: This must change.
						/>
					))
				) : (
					<p className='text-center text-base font-light'>
						No has agregado ningun habito
					</p>
				)}
			</div>
		</div>
	);
}

export default ManageHabits;
