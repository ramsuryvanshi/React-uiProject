import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full rounded-4xl overflow-x-auto p-6 flex flex-nowrap gap-10  w-2/3'>
     
       {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img}  color={elem.color} tag={elem.tag}/>
       })}
    
    </div>
  )
}

export default RightContent