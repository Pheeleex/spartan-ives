'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface itemProps{
    imageSrc: StaticImageData,
    title: string,
    description: String
}

const PortfolioItem = ({ imageSrc, title, description }: itemProps) => {
    return (
      <div className="sec-01 relative flex justify-center items-center p-[6%] text-brand">
        <div className="container relative flex justify-center items-center flex-col">
          <h2 className="main-title h3">
              We take pride in your satisfaction
              </h2>
          <div className="p-content relative w-full flex justify-center items-center">
            <div className="p-image relative w-[60%] h-[80%] overflow-hidden">
              <Image src={imageSrc} alt={title} className='z-20 absolute top-0 left-0 w-full h-full object-cover rounded-md' />
            </div>
            <motion.div 
               initial={{x: 0}}
               whileInView={{ x: [0, 20, -20, -40, ]}}
               transition={{duration: 1.2}}
              className="text-box z-30 bg-[rgba(146,82,82,0.5)] backdrop-blur-[20px] transform translate-x-[-50px] 
              translate-y-[50px] p-10 max-w-[400px] border border-[rgba(255,255,255,0.1)] 
              rounded-[10px] text-[#5e1010] font-poppins font-light">
              <h3 className='font-bold'>{title}</h3>
              <p>{description}</p>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
  
  export default PortfolioItem;