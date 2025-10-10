import { Edit, Trash } from 'lucide-react';
import { Habit } from '../../interfaces/Habit';

function HabitManagerItem({ name }: Habit) {
	return (
		<div className='flex items-center justify-between gap-3 border p-2 px-4 rounded'>
			<input
				type='text'
				defaultValue={name}
				className='text-xl font-bold outline-none bg-transparent disabled:border-none border-[#232946] border-b-2'
				disabled
			/>
			<div className='flex gap-3'>
				<Edit className='text-[#232946] hover:cursor-pointer' />
				<Trash className='text-red-500 hover:cursor-pointer' />
				{/* <Check className='text-[#232946] hover:cursor-pointer' />
				<X className='text-red-500 hover:cursor-pointer' /> */}
			</div>
		</div>
	);
}

export default HabitManagerItem;
