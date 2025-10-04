function App() {
	return (
		<div className='font-[Inria Sans] w-[470px] text-[#232946] flex flex-col gap-5'>
			<header className='text-center text-2xl font-bold p-3 text-white bg-[#232946]'>
				Tracker Extension
			</header>
			<div className='flex items-center justify-center gap-6'>
				<div className='flex flex-col items-center'>
					<h1 className='text-2xl font-bold'>L</h1>
					<div className='w-8 h-8 border-4 border-[#232946] rounded-full'></div>
				</div>
				<div className='flex flex-col items-center'>
					<h1 className='text-2xl font-bold'>M</h1>
					<div className='w-8 h-8 border-4 border-[#232946] rounded-full'></div>
				</div>
				<div className='flex flex-col items-center'>
					<h1 className='text-2xl font-bold'>M</h1>
					<div className='w-8 h-8 border-4 border-[#232946] rounded-full'></div>
				</div>
				<div className='flex flex-col items-center'>
					<h1 className='text-2xl font-bold'>J</h1>
					<div className='w-8 h-8 border-4 border-[#232946] rounded-full'></div>
				</div>
				<div className='flex flex-col items-center'>
					<h1 className='text-2xl font-bold'>V</h1>
					<div className='w-8 h-8 border-4 border-[#232946] rounded-full'></div>
				</div>
				<div className='flex flex-col items-center'>
					<h1 className='text-2xl font-bold'>S</h1>
					<div className='w-8 h-8 border-4 border-[#232946] rounded-full'></div>
				</div>
				<div className='flex flex-col items-center'>
					<h1 className='text-2xl font-bold'>D</h1>
					<div className='w-8 h-8 border-4 border-[#232946] rounded-full'></div>
				</div>
			</div>
			<hr className='border-2 border-[#232946]' />
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
			<footer>
				<button className='w-full bg-[#5A5AAA] p-2 text-white font-medium text-xl hover:bg-[#4c4c91]'>
					Administrar habitos
				</button>
			</footer>
		</div>
	);
}

export default App;
