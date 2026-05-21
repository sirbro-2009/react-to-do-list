import { useContext } from "react"
import {ToDoarray} from './context/arrayContext'
import WorksBar from "./worksBar"
function WorkBar({allOrno}){
const {toDoarray} = useContext(ToDoarray)
try{
if(allOrno === "all"){
return (<>{toDoarray.map((e,i)=>{
    return (<WorksBar key={i} e={e} i={i}></WorksBar>)
})}</>)
}
else if(allOrno === true){
return (<>{toDoarray.map((e,i)=>{
    return (e.complete=== true?<WorksBar key={i} e={e} i={i}></WorksBar>:``)
})}</>)
}
else if(allOrno === false){
return (<>{toDoarray.map((e,i)=>{
    return (e.complete=== false?<WorksBar key={i} e={e} i={i}></WorksBar>:``)
})}</>)
}
}
catch{
return (<h1 className="text-center font-bold text-3xl">they are not works sinces now :( </h1>)
}
}
export default function AllWroks({allOrno}){
return (
    <div>
    <WorkBar allOrno={allOrno}></WorkBar>
    </div>
)
}