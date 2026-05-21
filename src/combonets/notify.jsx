import { useContext } from 'react';
import  PopUpContext  from './context/popUp';
export default function Notify(){
const {pop} = useContext(PopUpContext)
return(<div className={`fixed inset-0 ${pop.done === null?"hidden":``} items-center justify-center z-50`}>
<div  className="bg-white/60 backdrop-blur-md -z-0text-center flex flex-col self-center w-full m-4 lg:w-1/5 p-1 font-bold
mb-4 
rounded-xl
">
<h1 className={`text-start text-3xl m-2 font-['Cherry_Bomb_One'] ${pop.done === true?`text-green-900/50`:`text-red-500/50`}`}>
    {pop.done === true?`Edited sucessfuly`:`some thing wronge`}
</h1>
</div>
</div>)
}