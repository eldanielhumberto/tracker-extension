import { Check, Edit, Trash, X } from 'lucide-react';
import { useRef, useState } from 'react';

import { useHabits } from '../../hooks/useHabits';
import { IHabit } from '../../interfaces/IHabit';

function HabitManagerItem({ habit }: { habit: IHabit }) {
	const { removeHabitFromStorage, updateHabitInStorage } = useHabits();

	const [habitValue, setHabitValue] = useState(habit.name);
	const [isEditMode, setIsEditMode] = useState(false);
	const habitInput = useRef<HTMLInputElement>(null);

	const saveHabit = () => {
		if (habitValue === '') return; // TODO: Show an error

		updateHabitInStorage(habit.id, habitValue);
		setIsEditMode((prev) => !prev);
	};

	const cancelEdit = () => {
		if (!habitInput.current) return;

		habitInput.current.value = habit.name;
		setHabitValue(habit.name);
		setIsEditMode((prev) => !prev);
	};

	// TODO: This should be a form for the “ENTER” key to work.
	return (
		<div className='flex items-center justify-between gap-3 border p-2 px-4 rounded border-[#7f8394]'>
			<input
				type='text'
				defaultValue={habitValue}
				className='text-xl font-bold outline-none bg-transparent disabled:border-none border-[#232946] border-b-2'
				onChange={(e) => setHabitValue(e.target.value)}
				ref={habitInput}
				disabled={!isEditMode}
			/>
			<div className='flex gap-3'>
				{isEditMode ? (
					<>
						<Check
							className='text-[#232946] hover:cursor-pointer'
							onClick={saveHabit}
						/>
						<X
							className='text-red-500 hover:cursor-pointer'
							onClick={cancelEdit}
						/>
					</>
				) : (
					<>
						<Edit
							className='text-[#232946] hover:cursor-pointer'
							onClick={() => setIsEditMode((prev) => !prev)}
						/>
						<Trash
							className='text-red-500 hover:cursor-pointer'
							onClick={() => removeHabitFromStorage(habit.id)}
						/>
					</>
				)}
			</div>
		</div>
	);
}

export default HabitManagerItem;
