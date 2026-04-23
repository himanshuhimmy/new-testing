import React, { useRef, useState } from 'react'

const TimerComp = () => {

    let[Counter,setCounter]=useState(0) 

    let TimeRef =useRef(null)

    function handleStart(){

        if (!TimeRef.current) {
               TimeRef.current=   setInterval(() => {
            setCounter(prev => prev + 1)
        }, 1000);
        } else {
            return
        }
    }
function handleSReset(){
if (Counter === 0) {
    return
}
setCounter(0)
clearInterval(TimeRef.current)
TimeRef.current=0

}


function HandlePause(){
clearInterval(TimeRef.current)
TimeRef.current = 0
    
}

  return (
    <div>
      TImer :  {Counter}
<div>
      <button onClick={handleStart}>Start</button>
         <button onClick={handleSReset}>ReSet</button>
            <button onClick={HandlePause}>Pause</button>
</div>
    </div>
  )
}

export default TimerComp
