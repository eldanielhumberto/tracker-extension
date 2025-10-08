import { MoveLeft } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setIsManageMode: Dispatch<SetStateAction<boolean>>
}

function ManageHabits({ setIsManageMode }: Props) {
  return (
    <div className="absolute size-full z-10 bg-white flex gap-5 flex-col">
      <button onClick={() => setIsManageMode(false)} className="flex items-center gap-2 font-medium text-2xl mx-4 mt-5">
        <MoveLeft /> Regresar
      </button>
      <hr className="border border-[#232946]" />
      <form className="flex gap-2 px-4">
        <input
          type="text"
          className="border border-[#232946] rounded w-full p-1 px-4 text-lg"
          placeholder="Mi habito..."
        />
        <button className="bg-[#232946] rounded text-white px-5 font-medium text-lg">
          Agregar
        </button>
      </form>
      <div className='flex flex-col gap-3 px-4'>
        <div className='flex items-center gap-3'>
          <div className='w-8 h-8 border-4 rounded-xl border-[#232946]'></div>
          <p className='text-xl font-bold'>Ejercicio</p>
        </div>
        <div className='flex items-center gap-3'>
          <div className='w-8 h-8 border-4 rounded-xl border-[#232946]'></div>
          <p className='text-xl font-bold'>Ejercicio</p>
        </div>
        <div className='flex items-center gap-3'>
          <div className='w-8 h-8 border-4 rounded-xl border-[#232946]'></div>
          <p className='text-xl font-bold'>Ejercicio</p>
        </div>
      </div>
    </div>
  )
}

export default ManageHabits;
