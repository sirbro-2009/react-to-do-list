import AddInput from "./AddInput"

import AllWroks from "./AllWorks"
import {Route,Routes,Link} from 'react-router-dom'
if(!localStorage.getItem("allWorks")){
localStorage.setItem("allWorks",[])
}

export default function FirstBar(){
return (
<>
<div className="bg-white/20 backdrop-blur-md w-full lg:w-1/2 flex flex-col self-center shadow-md p-2  shadow-slate-300/50 rounded-2xl border-white/50">
<h1 className="text-center text-6xl  font-['Cherry_Bomb_One'] text-sky-800/60">To do list</h1>
<h1 className="text-center text-lg  font-['Cherry_Bomb_One'] text-black/60">by <a  href="https://github.com/sirbro-2009"> Mouhamed</a></h1>
<AddInput></AddInput>
<ul className="flex justify-between lg:justify-center">
    <li><Link to="/"><button className="bg-white/30 m-2 cursor-pointer hover:text-sky-950/60 p-2 duration-1000 transition-all text-sky-950/40 text-2xl rounded-xl font-['Cherry_Bomb_One']">Home 🏠</button></Link></li>
    <li><Link to="/completed"><button className="bg-white/30 m-2 cursor-pointer hover:text-sky-950/60 p-2 duration-1000 transition-all text-sky-950/40 text-2xl rounded-xl font-['Cherry_Bomb_One']">Done ✅</button></Link></li>
    <li><Link to="/non-completed"><button className="bg-white/30 m-2 cursor-pointer hover:text-sky-950/60 p-2 duration-1000 transition-all text-sky-950/40 text-2xl rounded-xl font-['Cherry_Bomb_One']">Non completed❌</button></Link></li>
</ul>
<Routes>
    <Route path="/" element={<AllWroks allOrno="all"></AllWroks>}></Route>
    <Route path="/completed" element={<AllWroks allOrno={true}></AllWroks>}></Route>
    <Route path="/non-completed" element={<AllWroks allOrno={false}></AllWroks>}></Route>
</Routes>

</div>
</>
)
}