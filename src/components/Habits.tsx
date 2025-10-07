function Habits() {
	return (
		<div className='flex flex-col justify-center p-4'>
			<p className='text-base font-light mb-4'>
				Para seguir la racha necesitas completar todos tus habitos
			</p>
			<div className='flex flex-col gap-3'>
				<div className='flex items-center gap-3'>
					<div className='w-8 h-8 border-4 rounded-xl border-[#232946]'></div>
					<p className='text-2xl font-bold'>Ejercicio</p>
				</div>
				<div className='flex items-center gap-3'>
					<div className='w-8 h-8 border-4 rounded-xl border-[#232946]'></div>
					<p className='text-2xl font-bold'>Ejercicio</p>
				</div>
				<div className='flex items-center gap-3'>
					<div className='w-8 h-8 border-4 rounded-xl border-[#232946]'></div>
					<p className='text-2xl font-bold'>Ejercicio</p>
				</div>
			</div>
		</div>
	);
}

export default Habits;
