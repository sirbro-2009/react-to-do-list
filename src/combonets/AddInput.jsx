import { useState ,useContext} from "react";
import add from './assets/icon/add.png'
import {ToDoarray} from './context/arrayContext'

export default function AddInput(){
const [inputValue,setInputValue] = useState({
    text:"",
    complete:false,
})
const {toDoarray,setArray} = useContext(ToDoarray)
let addFunction = async()=>{
try{
if(inputValue.text.trim()){
let array = [...toDoarray]
array.push(inputValue)
await setArray(array)
localStorage.setItem("allWorks",JSON.stringify(array))
await setInputValue({...inputValue,text:''})
}
}
catch{
alert("Something wrong")
}
}
return(<div className="flex justify-between w-full my-2">
<input type="text"
className="w-full mr-2 bg-white/20 rounded-lg text-3xl  font-bold text-center" 
value={inputValue.text} onInput={(e)=>{

    setInputValue({...inputValue,text:e.currentTarget.value})
    }}
placeholder="Enter your work 👋" 
autoFocus
onKeyDown={(e)=>{
    if(e.key === "Enter"){addFunction()}
}}
/>
<button className="w-15 rounded-full 
bg-white/20 
shadow-sm 
shadow-white cursor-pointer
duration-1000 transition-all hover:scale-110 hover:bg-white/10 
"
onClick={addFunction}
><img src={add} alt="" className="w-full " /></button>
</div>)
}