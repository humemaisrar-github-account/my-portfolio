import React from 'react'
 
  
interface props{
    title:string;
   
}

const Heading :React.FC<props> = ({title}) => {
  return (
    <div className='text-center text-5xl pb-8 text-pink-400'>
   <p className='border-b-4 inline-block pb-2 '> {title} </p>
    </div>
  )
}

export default Heading
