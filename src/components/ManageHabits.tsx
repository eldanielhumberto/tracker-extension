import { Check, Edit, MoveLeft, Trash, X } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

interface Props {
	setIsManageMode: Dispatch<SetStateAction<boolean>>;
}

function ManageHabits({ setIsManageMode }: Props) {
	return (
		<div className='absolute size-full z-10 bg-white flex gap-5 flex-col'>
			<button
				onClick={() => setIsManageMode(false)}
				className='flex items-center gap-2 font-medium text-2xl mx-4 mt-5'
			>
				<MoveLeft /> Regresar
			</button>
			<hr className='border border-[#232946]' />
			<form className='flex gap-2 px-4'>
				<input
					type='text'
					className='border border-[#232946] rounded w-full p-1 px-4 text-lg'
					placeholder='Mi habito...'
				/>
				<button className='bg-[#232946] rounded text-white px-5 font-medium text-lg'>
					Agregar
				</button>
			</form>
			<div className='flex flex-col gap-3 px-4'>
				<div className='flex items-center justify-between gap-3 border p-2 px-4 rounded'>
					<input
						type='text'
						defaultValue='Ejercicio'
						className='text-xl font-bold outline-none bg-transparent disabled:border-none border-[#232946] border-b-2'
						disabled
					/>
					<div className='flex gap-3'>
						<Edit className='text-[#232946]' />
						<Trash className='text-red-500' />
					</div>
				</div>
				<div className='flex items-center justify-between gap-3 border p-2 px-4 rounded'>
					<input
						type='text'
						defaultValue='Ejercicio'
						className='text-xl font-bold outline-none bg-transparent disabled:border-none border-[#232946] border-b-2'
						disabled
					/>
					<div className='flex gap-3'>
						<Edit className='text-[#232946]' />
						<Trash className='text-red-500' />
					</div>
				</div>
				<div className='flex items-center justify-between gap-3 border p-2 px-4 rounded'>
					<input
						type='text'
						defaultValue='Ejercicio'
						className='text-xl font-bold outline-none bg-transparent disabled:border-none border-[#232946] border-b-2'
					/>
					<div className='flex gap-3'>
						{/* <Edit className='text-[#232946]' />
						<Trash className='text-red-500' /> */}
						<Check className='text-[#232946] hover:cursor-pointer' />
						<X className='text-red-500 hover:cursor-pointer' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ManageHabits;
