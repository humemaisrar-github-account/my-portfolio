import Link from 'next/link';
import React from 'react'
import { FaCheckCircle, FaGithub, FaYoutube } from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
 
const Skills= () => {
  return (        
     <div className='  grid gap-4xl:gap-0 xl:gap-y-10 place-items-center pb-40'>
     <div>
     <h2 className='text-4xl font-bold  uppercase text-pink-500   pt-28' >Skills</h2>
      </div>
 
    
     <div className=' items-center justify-center rounded-full
       md-4 flex-shrink-0 w-80'>
     <FaCheckCircle className='text-pink-300 text-lg font-bold'/>
     <h2 className= "text-lg font-semibold tracking-tight" >
      </h2>HTML
     <div className='h-1 rounded-lg bg-gray-600'>
      <div className='w-[96%] h-1 bg-gradient-to-br from-pink-600 to-pink-800 rounded-lg  '>
      </div>
      <h4 className="text-pink-500 text-sm text-right font-semibold tracking-tight" >96% </h4></div> 
     </div>
    
     {/* ok */}
    
     <div className=' items-center justify-center rounded-full
       md-4 flex-shrink-0 w-80 space-'>
     <FaCheckCircle className='text-pink-300 text-lg font-bold'/>
     <h2 className= "text-lg font-semibold tracking-tight">
      </h2>CSS
     <div className='h-1 rounded-lg bg-gray-600'>
      <div className='w-[84%] h-1 bg-gradient-to-br from-pink-600 to-pink-800 rounded-lg'>
      </div>
      <h4 className="text-pink-500 text-sm text-right font-semibold tracking-tight">84% </h4> </div>
     </div>
 
     {/* ok */}
     <div className=' items-center justify-center rounded-full
       md-4 flex-shrink-0 w-80 pb-16'>
     <FaCheckCircle className='text-pink-300 text-lg font-bold'/>

     <h2 className= "text-lg font-semibold tracking-tight" >
      </h2>JavaScript&TypeScript
     <div className='h-1 rounded-lg bg-gray-600'>
      <div className='w-[86%] h-1 bg-gradient-to-br from-pink-600 to-pink-800 rounded-lg'>
      </div>
      <h4 className="text-pink-500 text-sm text-right font-semibold tracking-tight" >86% </h4> 
     
     {/* ok */}
     </div>

     </div>
        </div>
       
   
 
  )
};

export default Skills