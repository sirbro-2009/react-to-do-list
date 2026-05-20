import AddInput from "./AddInput"
import { useState } from "react"
import {ToDoarray} from './context/arrayContext'
import AllWroks from "./AllWorks"
if(!localStorage.getItem("allWorks")){
localStorage.setItem("allWorks",[])
}

export default function FirstBar(){

const [toDoarray,setArray] = useState(localStorage.getItem("allWorks")?JSON.parse(localStorage.getItem("allWorks")):[])
return (
<>
<ToDoarray.Provider value={{toDoarray,setArray}}>
<div className="bg-white/20 backdrop-blur-md w-full lg:w-1/2 flex flex-col self-center shadow-md p-2  shadow-slate-300/50 rounded-2xl border-white/50">
<h1 className="text-center text-6xl  font-['Cherry_Bomb_One'] text-sky-800/60">To do list</h1>
<h1 className="text-center text-lg  font-['Cherry_Bomb_One'] text-black/60">by <a  href="https://github.com/sirbro-2009"> sirbro-2009</a></h1>
<AddInput></AddInput>
<AllWroks></AllWroks>
</div>
</ToDoarray.Provider>
</>
)
}