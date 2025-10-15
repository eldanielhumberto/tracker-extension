function SuperStreakList() {
	const days = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

	return (
		<div className='flex items-center justify-center gap-6'>
			{days.map((v, i) => (
				<div className='flex flex-col items-center'>
					<h1 className='text-2xl font-bold'>
						{v} {new Date().getDay() === i ? '*' : null}
					</h1>
					<div className='w-8 h-8 border-4 border-[#232946] rounded-full'></div>
				</div>
			))}
		</div>
	);
}

export default SuperStreakList;
