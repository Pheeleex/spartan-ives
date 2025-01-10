'use client'
import { Build1, Build2, Build4 } from '@/consants';
import React from 'react'
import { motion } from "motion/react"
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  const portfolioData = [
    {
      imageSrc: Build2,
      title: 'Soren Heights',
      description: `Soren Heights is a luxurious high-rise apartment complex located in the heart of the city. 
      Spartan Ives worked closely with the landlord to secure a record-breaking sale price within weeks of listing. 
      Our strategic marketing and targeted outreach attracted high-value buyers, surpassing client expectations and delivering exceptional results.`
    },
    {
      imageSrc: Build1,
      title: 'Summer Palace',
      description: `The Summer Palace is a stunning beachfront villa offering unmatched views and elegant architecture. 
      Spartan Ives helped the property owner secure a long-term lease with a discerning tenant who was thrilled to find their dream home. 
      Our attention to detail and personalized service ensured both parties were fully satisfied, 
      making this transaction a seamless success.`
    },
    {
      imageSrc: Build4,
      title: 'Salamander',
      description: `Salamander is a modern residential community designed for comfortable and stylish living. 
      Spartan Ives partnered with a group of investors to maximize rental income while maintaining high tenant satisfaction. 
      By implementing strategic upgrades and optimizing occupancy rates, 
      we achieved a remarkable return on investment that exceeded the investors' expectations.`
    }
  ];
  return (
    <section className='mt-40'>
         <motion.h2 
          initial={{x:100}}
          whileInView={{x:[300, 4]}}
          transition={{duration:2}}
          className="service-head h2">Portfolio</motion.h2>
      <div
            className="line">
            </div>
            {
                portfolioData.map((item, index) => (
                    <PortfolioItem key={index} imageSrc={item.imageSrc} 
                    title={item.title} description={item.description} />
                ))
            }
   </section>
  )
}

export default Portfolio