
import Link from 'next/link';
import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import { FaCheckCircle, FaGithub, FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const Contact = () => {
  const handleClick = () =>{
    alert("submit🙂")
  }
  return (
    <div id="contact" className=' container' >
        <div className="   grid md:grid-cols-2">
            <div className='space-y-8  '>
                <h2 className='text-5xl text-pink-600 animate-pulse '>let's Connect</h2>
                <h3 className="text-pink-200 text-[18px]  pt-14">
                    Drop me a line, send me a message by submitting the form.</h3>
           <div className='flex gap-3 items-center text-pink-200'> 
            <AiOutlineMail size={30} />  E-mail
             </div>

             <div className='flex gap-3 items-center text-pink-200'> 
            <FaCheckCircle size={30} /> humema.israr09@gmail.com
             </div>
             </div>
             <div className='space-y-8'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name" className="text-pink-200">Name</label>
                    <input type="text"
                    className="h-[40px] bg-transparent border border-pink-500" id="name"/>
             </div>

             <div className='space-y-8'>
             <div className='flex flex-col gap-1'>
                    <label htmlFor="email" className="text-pink-200">Email</label>
                    <input type="text"
                    className="h-[40px] bg-transparent border border-pink-500" id="email" /> 
            </div>
            </div>
         
            <div className='space-y-8'>
             <div className='flex flex-col gap-1'>
                    <label htmlFor="message" className="text-pink-200">Message</label>
                    <textarea 
                    className="bg-transparent border border-pink-500" id="message" rows={5}></textarea> 
            </div>
            <button onClick={handleClick} className="bg-transparent border border-pink-800 text-pink-300 bg-slate-500">Submit</button>
            </div>
            </div>
            <div className="grid-cols-2 gap-1">
      <div>
        <Link href="https://www.linkedin.com/posts/humema-israr-b184342b5_giaic-sir-sir-activity-7247660273153560576-YMKR?utm_source=share&utm_medium=member_android" target="_blank" className='text-pink-600 hover:text-[#0762c8]'> 
        <FaLinkedin  className='text-4xl '/></Link>
      </div>

      <div>
      <Link href="https://github.com/humemaisrar-github-account/Hackathon_milestone-5.git" target="_blank" className='text-pink-600 hover:text-[#6e5494] '> 
      <FaGithub  className='text-4xl'/></Link>
      </div>
      <div>
      <Link href="https://www.instagram.com/haniyahani.hani.9/" target="_blank" className='text-pink-600 hover:text-[#d85e5e] '> 
      <FaInstagram  className='text-4xl'/></Link>
      </div>
             </div>
    </div>
    </div>
  
  );
};
export default Contact
 