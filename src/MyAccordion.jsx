import React, { useState } from 'react'
const MyAccordion = ({title,topics}) => {
    const [show,setShow]=useState(false);
  return (
    <>
      <div className="main-1" onClick={()=>{setShow(!show)}}>
            <span className="subItem1">{show?"➖":"➕"}</span>
            <span className="subItem2">{title}</span>
      </div>
      <div className="main-2">
        {
            show && topics.map((e)=>{
                return(
                    <>
                    <p>{e}</p>
                    </>
                )
            })
        }
      </div>
    </>
  )
}

export default MyAccordion
