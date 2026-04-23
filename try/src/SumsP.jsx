import React, { useRef, useState } from 'react'

const SumsP = () => {
    
    let [buttonClicked,setButtonClicked]=useState(false)

    let  timerRef= useRef(null)

    function handleOnclick(){
    if (timerRef.current) {
        clearTimeout(timerRef.current)
        timerRef.current = null
        setButtonClicked(false)
        return
    }


      timerRef.current = setTimeout(() => {
        alert("i was clicked")
        setButtonClicked(false)
    }, 3000)
    }


  return (
    <div>
      sums
      <button onClick={handleOnclick}>  {buttonClicked == true ? "stop":"Alert"}</button>
    </div>
  )
}

export default SumsP
