'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface itemProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
}

const PortfolioItem = ({ imageSrc, title, description }: itemProps) => {
  return (
    <div className="sec-01 flex justify-center items-center gap-0 p-[6%] text-brand ">
      <div className="  flex flex-col justify-center items-center gap-0 w-full h-auto p-4 mt-0 space-y-6  lg:space-y-0">
        <h2 className="main-title h3 text-center mb-4 lg:mb-6">
          We take pride in your satisfaction
        </h2>
        <div className="p-content flex flex-col lg:flex-row justify-center items-center w-full">
          {/* Image Section */}
          <div className="p-image  h-[16rem] w-[20rem] sm:h-[20rem] sm:w-[40rem] lg:h-[28rem] lg:w-[46rem] flex justify-center items-center relative">
            <Image
              src={imageSrc}
              alt={title}
              className="z-20 w-full h-full object-cover rounded-md"
              width={800}
              height={400}
            />
          </div>

          {/* Text Box */}
          <motion.div
            initial={{ x: 0 }}
            whileInView={{ x: [0, 20, -20, -40] }}
            transition={{ duration: 1.2 }}
            className=" relative bottom-20 left-4 text-box z-30 bg-[rgba(146,82,82,0.4)] backdrop-blur-[20px] 
              p-4 max-w-[90%] sm:max-w-[400px] border border-[rgba(255,255,255,0.1)] 
              rounded-[10px] text-[#5e1010] font-poppins font-light text-sm lg:static lg:max-w-[400px] 
              translate-x-[-50px] translate-y-[50px] lg:translate-x-[-70px] lg:p-6">
            <h3 className="font-bold text-base lg:text-lg">{title}</h3>
            <p className="text-sm">{description}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
