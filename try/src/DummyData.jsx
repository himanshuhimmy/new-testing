import React, { useState } from 'react'
import axios from "axios";
const DummyData = () => {
let [button,setButton]=useState(false)
let [data,setData]=useState(null)
let [error, setError] = useState(null)

async function fetchApi(){
setButton(true)

try {
    let newData= await axios.get("https://jsonplaceholder.typicode.com/users/1")
    setData(newData.data)
    
} catch (error) {
    setError("Error fetching user!") 
}finally {
  setButton(false) 
}

}


  return (
    <div>
        {(button && data === null)  &&<p>Loading.....</p>}
<button disabled={button} onClick={fetchApi} >Fetch Data</button>     

{error && <p className="text-red-500">{error}</p>}

{ data !== null &&  <>  {data?.name} {data?.email} </>}
    </div>
  )
}
export default DummyData
