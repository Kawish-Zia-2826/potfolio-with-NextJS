import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import {BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container '>
        <div className="grid md:grid-cols-2 gap-10">
            
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="fade-left">Get in tousch</h2>
                <p className="text-gray-600 text-[18px] pr-2" data-aos="fade-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni unde voluptates aliquid tempore vel rem ullam fuga ducimus labore. Esse labore deserunt id eligendi perspiciatis dolorem voluptas omnis optio!
                </p>
                <div className='flex gap-3 items-center' data-aos="fade-left"> 
                    <AiOutlineMail size={30}/>xyz@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="fade-left"> 
                    <BsTelephone size={30}/>x12345678
                </div>
            </div>
            <div className="space-y-8">
            <div className='flex flex-col gap-1'>
<label htmlFor="namee" data-aos="fade-left">Name</label>
<input type="text"
className='h-[40px] bg-transparent border border-accent '
id='namee'/>
</div>
                <div className='flex flex-col gap-1'>
<label htmlFor="email" data-aos="fade-left">Email</label>
<input type="text"
className='h-[40px] bg-transparent border border-accent '
id='email'/>
</div>
                <div className='flex flex-col gap-1'>
<label htmlFor="msg" data-aos="fade-left">Message</label>
<textarea
className='bg-transparent border border-accent'
id='msg' rows={8}>
</textarea>
</div>
                <button className='bg-accent p-2  px-6'>send</button>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
