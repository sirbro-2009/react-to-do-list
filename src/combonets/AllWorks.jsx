import {  useContext} from "react";
import {ToDoarray} from './context/arrayContext'
import Delete from './assets/icon/delete.png'
import Edit from './assets/icon/edit.png'
import Done from './assets/icon/done.png'
function WorkBar(){
const {toDoarray,setArray} = useContext(ToDoarray)
function detectLang(text) {
const arabic = /[\u0600-\u06FF]/
const english = /[a-zA-Z]/

if (arabic.test(text)) return "rtl"
if (english.test(text)) return "ltr"
return "ltr"
}
async function DeleteObject(index){
let array = [...toDoarray]
array.splice(index,1)
await setArray(array)
localStorage.setItem("allWorks",JSON.stringify(array))
}
async function CompleteObject(index) {
let array = [...toDoarray]
array[index].complete === true?(array[index].complete = false):(array[index].complete=true)
await setArray(array)
localStorage.setItem("allWorks",JSON.stringify(array))
}
async function Edite(index) {
let array = [...toDoarray]
let newValue = prompt("ادخل قيمة جديدة")
if(newValue.trim()){
array[index].text = newValue
await setArray(array)
localStorage.setItem("allWorks",JSON.stringify(array))
}
}
try{
return (<>{toDoarray.map((e,i)=>{
    return (<div key={i} className="bg-white/20 m-2 p-2 rounded-xl flex justify-between ">
        <h1 className="p-5 font-bold text-2xl w-4/5" dir={detectLang(e.text)}>{e.complete?<del>{e.text}</del>:<>{e.text}</>}</h1>
<div className="flex justify-center align-middle">
        <button className="w-11  rounded-full 
            bg-white/20 
            shadow-sm 
            shadow-white cursor-pointer
            duration-1000 transition-all  hover:scale-110 hover:bg-white/10 mx-1 my-3 p-1 h-11
            " onClick={()=>{CompleteObject(i)}}><img src={Done} alt="" className="w-full" /></button>
        <button className="w-11  rounded-full 
            bg-white/20 
            shadow-sm 
            shadow-white cursor-pointer
            duration-1000 transition-all  hover:scale-110 hover:bg-white/10 mx-1 my-3 p-1 h-11
            "><img src={Edit} alt="" onClick={()=>{Edite(i)}} className="w-full" /></button>
        <button className="w-11  rounded-full 
            bg-white/20 
            shadow-sm 
            shadow-white cursor-pointer
            duration-1000 transition-all  hover:scale-110 hover:bg-white/10 mx-1 my-3 p-1 h-11
            " onClick={()=>{DeleteObject(i)}}><img src={Delete} alt="" className="w-full" /></button>
</div>
    </div>)
})}</>)
}
catch{
return (<h1 className="text-center font-bold text-3xl">they are not works sinces now :( </h1>)
}
}
export default function AllWroks(){
return (
    <div>
    <WorkBar></WorkBar>
    </div>
)
}