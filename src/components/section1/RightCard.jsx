import React from 'react'

const RightCard = (props) => {
  return (
    <div className='h-full overflow-hidden shrink-0 relative w-70 bg-red-500 rounded-4xl'>
        <img className='h-full w-full object-cover'  src={props.img}/> 
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between '>
              <h2 className='bg-white rounded-full h-12 w-12 font-semibold text-xl flex justify-center items-center'>{props.id+1}</h2>
              <div>
                <p className='text-xl leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, fugiat Lorem</p>
                <div className='flex justify-between' >
                   <button style={{backgroundColor:props.color}}className=' rounded-full px-8 py-2 font-medium text-white'>{props.tag}</button>
                   <button className='bg-blue-600 rounded-full px-3 py-2 font-medium text-white'><i className='ri-arrow-right-line'></i></button>
                </div>
              </div>
        </div> 
    </div>
  )
}

export default RightCard