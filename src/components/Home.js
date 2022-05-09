import React, { useState } from 'react'
// import Topbar from './Topbar'
import Buttoncomponent from './Buttoncomponent'
import Getcomponent from './Getcomponent'
export default function Home() {
  const arr = [1,2,3,4,5]
  const [Index, setIndex] = useState(0)
  const applyPagination=(o)=>{
    setIndex()//formula to set Index
    
  }
  return (
    <>  
        <div>

        <Getcomponent startIndex={Index}/>
        </div>
        <Buttoncomponent applyPagination={applyPagination}/>
    </>
  )
}
