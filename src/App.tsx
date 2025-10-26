import { useState } from 'react';
import SuperStreakList from './components/SuperStreakList';
import ManageHabits from './components/ManageHabits';
import HabitList from './components/HabitList';

function App() {
	const [isManageMode, setIsManageMode] = useState(false);

	return (
		<div className='font-[Inria Sans] w-[470px] text-[#232946] bg-[#fff4e7] flex flex-col gap-5 relative'>
			<header className='text-center text-2xl font-bold p-3 text-white bg-[#232946]'>
				Tracker Extension
			</header>

			<SuperStreakList />
			<HabitList />

			{/*=== MANAGE HABITS ===*/}
			<button
				className='w-full bg-[#5A5AAA] p-2 text-white font-medium text-xl hover:bg-[#4c4c91]'
				onClick={() => setIsManageMode((prev) => !prev)}
			>
				Administrar habitos
			</button>
			{isManageMode && <ManageHabits setIsManageMode={setIsManageMode} />}
		</div>
	);
}

export default App;
