import myVideo from './combonets/assets/videos/244839_medium.mp4'
import FirstBar from './combonets/FirstBar';
import POP from './combonets/POP'
import { useState } from 'react';
import {ToDoarray} from './combonets/context/arrayContext'
import  PopUpContext  from './combonets/context/popUp';
import Notify from './combonets/notify';
function App() {
const [pop,setPop]=useState({
  show :false,
  value:"",
  index:null,
  done:null,
})
const [toDoarray,setArray] = useState(localStorage.getItem("allWorks")?JSON.parse(localStorage.getItem("allWorks")):[])
  return (
<ToDoarray.Provider value={{toDoarray,setArray}}>
<PopUpContext.Provider value={{pop,setPop}}>
    <div className="relative h-screen">
            <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        src={myVideo}
      >
      </video>

      <div className="relative z-10 flex justify-center  pt-20">
        <FirstBar></FirstBar>
      </div>
      <POP></POP>
      <Notify></Notify>
    </div>
</PopUpContext.Provider>
</ToDoarray.Provider>

  );
}

export default App;
