import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Counter({ start, end }) {
    const [count, setCount] = useState(start)
    
    useEffect(() => {
      
        const id=setInterval(() => {
            setCount(function (prev) {
                if (prev < end) {
                    console.log("render",prev)
                  return prev+1
                } else {
                    clearInterval(id)
              }
          })
      },1000)
    },[])
     
  
  return (
      <div><h1>Counter { count}</h1>
          
      </div>

  )
}
