import React, { useState } from 'react'

function Counter() {
    const[count ,setCount] = useState(0);

  function Increment (){
    setCount(count+1);
  }
  function Decrement (){
    if(count != 0){
    setCount(count-1);
    }
    else{
      setCount(0);
    }
  }
  function Reset (){
    setCount(0);
  }
  return (
    <div>
         <div className='text-center'>
        <h1 className='text-7xl m-8' >Count is <span className='bold'>{count}</span></h1>
        <button  onClick={Increment} className = 'bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 m-4'>Increment</button>
        <br/>
        <button onClick={Decrement} className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 m-4'>Decrement</button>
        <br/>
        <button onClick={Reset} className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 m-4'>Reset</button>
        </div>
      
    </div>
  )
}

export default Counter
