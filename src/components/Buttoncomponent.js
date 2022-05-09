import React from 'react'

export default function Buttoncomponent({props}) {
  const arr = [1,2,3,4,5]
  
  
  return (
    <>
      {
        arr.map(o=>{
          return <button  data-testId={o} onClick={()=>x}>{o}</button>
        })
      }
    </>
  )
}
