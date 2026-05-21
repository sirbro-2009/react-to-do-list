import {useContext} from "react";
import {ToDoarray} from './context/arrayContext'
import Delete from './assets/icon/delete.png'
import Edit from './assets/icon/edit.png'
import Done from './assets/icon/done.png'
import Close from './assets/icon/close.png'
import  PopUpContext  from './context/popUp';
export default function WorksBar({e,i}){
const {toDoarray,setArray} = useContext(ToDoarray)
const {pop,setPop} = useContext(PopUpContext)
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
await setPop({...pop,show:true,value:array[index].text,index:index})

}
return (
<div key={i} className="bg-white/20 m-2 p-2 rounded-xl flex justify-between ">
        <h1 className="p-5 font-bold text-2xl w-4/5" dir={detectLang(e.text)}>
        {e.complete?<del>{e.text}</del>:<>{e.text}</>}
        </h1>
<div className="flex justify-center align-middle">
        <button className="w-11  rounded-full 
            bg-white/20 
            shadow-sm 
            shadow-white cursor-pointer
            duration-1000 transition-all  hover:scale-110 hover:bg-white/10 mx-1 my-3 p-1 h-11
            " onClick={()=>{CompleteObject(i)}}><img src={e.complete === true?Close:Done} alt="" className="w-full" /></button>
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
    </div>
)
}