import { useContext } from 'react';
import  PopUpContext  from './context/popUp';
import {ToDoarray} from './context/arrayContext'
export default function POP(){
const {toDoarray,setArray} = useContext(ToDoarray)
const {pop,setPop} = useContext(PopUpContext)
return(<div className={`fixed inset-0 bg-black/50 ${pop.show===true?"flex":"hidden"} items-center justify-center z-50`}>
<div  className="bg-white/60 -z-0text-center flex flex-col self-center w-full m-4 lg:w-1/2 p-5 font-bold
mb-4 
rounded-xl
">
<h1 className="text-start text-3xl m-2 font-['Cherry_Bomb_One']">Type to edit</h1>
<input type="text" className=" text-3xl p-2 m-2 w-full rounded-xl bg-white/20" autoFocus value={pop.value} onInput={
    (e)=>{
        setPop({...pop,value:e.currentTarget.value})
    }
}  placeholder="Enter"/>
<div className="w-full flex justify-between">
<button className="bg-red-400/40 cursor-pointer p-2 rounded-xl mt-5
duration-1000 transition-all hover:bg-red-600/40  w-1/2 mx-2 font-['Cherry_Bomb_One'] text-3xl text-black/60"
onClick={()=>{setPop({...pop,show:false})}}
> Close  ❌ </button>
<button className="bg-green-400/40 cursor-pointer p-2 rounded-xl mt-5
duration-1000 transition-all hover:bg-green-600/40  w-1/2 mx-2 font-['Cherry_Bomb_One'] text-3xl text-black/60"
onClick={async()=>{
    if(pop.value.trim()){
        try{
    let array = [...toDoarray]
    array[pop.index].text = pop.value.trim()
    await setArray(array)
    localStorage.setItem("allWorks",JSON.stringify(array))
    setPop({...pop,done:true,show:false})
    setTimeout(() => {
    setPop({...pop,done:null,show:false})
    }, 5000);
        }
        catch{
            setPop({...pop,show:false})
setTimeout(() => {
setPop({...pop,done:null,show:false})
}, 5000);
        }
    }
 }}
> Edit ✏️ </button>
</div>
</div>
</div>)
}