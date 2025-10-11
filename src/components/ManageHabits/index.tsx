import { SubmitHandler, useForm } from 'react-hook-form';
import { Dispatch, SetStateAction } from 'react';
import { MoveLeft } from 'lucide-react';
import { nanoid } from 'nanoid';

import { useHabits } from '../../hooks/useHabits';

import HabitManagerItem from './HabitManagerItem';
import Divider from '../shared/Divider';

interface Props {
	setIsManageMode: Dispatch<SetStateAction<boolean>>;
}

interface FormInput {
	habitName: string;
}

function ManageHabits({ setIsManageMode }: Props) {
	const { register, handleSubmit, reset } = useForm<FormInput>();
	const { habits, saveHabitInStorage } = useHabits();

	const onSubmit: SubmitHandler<FormInput> = async (data) => {
		saveHabitInStorage({ id: nanoid(), name: data.habitName, completedAt: null });
		reset();
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
			<form className='flex gap-2 px-4' onSubmit={handleSubmit(onSubmit)}>
				<input
					type='text'
					className='border border-[#232946] rounded w-full p-1 px-4 text-lg'
					placeholder='Mi habito...'
					{...register("habitName")}
				/>
				<button className='bg-[#232946] rounded text-white px-5 font-medium text-lg'>
					Agregar
				</button>
			</form>

			{/*=== HABIT LIST ===*/}
			<div className='flex flex-col gap-3 px-4'>
				{habits.length > 0 ? (
					habits.map((habit) => (
						<HabitManagerItem
							key={habit.id}
							id={habit.id}
							completedAt={habit.completedAt}
							name={habit.name}
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
