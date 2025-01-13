'use client'
import Link from 'next/link';
import React from 'react'
import { motion } from "motion/react"
import { TypeAnimation } from 'react-type-animation';

const Services = () => {
    const servicesData = [
        {
          title: 'For Landlords',
          description: `At Spartan Ives, we simplify the process of selling your properties and manading your rentals.
          Whether you are looking to sell or rent your properties our platform is designed with  built in tools to make the
          process seamless and manage your tenants well.`,
          link: 'properties'
        },
        {
          title: 'For Tenants',
          description: `Finding your perfect home has never been easier. Spartan ives offers a wide range of rental options tailored
          to your unique preferences. The best part is we make the whole process seamless, from browsing listings to signing leases.`,
          link: 'properties'
        },
        {
          title: 'For Investors',
          description: `Spartan Ives opens the door to lucrative real estate investment opportunities. Whether you are interested in
          buying properties or earning returns through rental incomes, we provide insights and tools you'll need to make informed decisions
          to grow your portfolio and maximise investment potential.`,
          link: 'Contact'
        }
      ];
  return (
    <div className='overflow-x-hidden flex flex-col justify-center items-center mb-28'>
    <motion.h2 
        className='h2'
        initial={{x:100}}
          whileInView={{x:[200, 4]}}
        transition={{duration:2}}
        >Our Services
        </motion.h2>
    <div className="line" />
    <section className='p-4'>
    <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Easy Buy',
            1000, 
            'Easy Sell',
            1000,
             'Easy Rent',
            1000,
            'Easy Invest',
            1000
      ]}
          wrapper="p"
          className='mb-4'
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block', color:'brown', height: '40px' }}
          repeat={Infinity}
           aria-live="polite"
        />
            <p className='text-center font-bold text-[21px]'>We are your trusted and most reliable source for all things property and real estate</p>
        <div className="cards-container flex flex-col lg:flex-row justify-center gap-8 py-6 px-10">
            {
                servicesData.map((service, index)=> (
                    <motion.div 
                        key={index} 
                        className="cards flex flex-col gap-1 text-justify bg-red-200 p-6 rounded-xl overflow-y-hidden"
                        initial={{y: 100}}
                        whileInView={{y:[100, 0]}}
                        transition={{duration: 2}}
                        >
                          <h3 className='h3'>{service.title}</h3>
                    <p className='text-[14.5px]'>{service.description}</p>
                <Link href='/' className='link text-brand' 
                  aria-label={`Learn more about ${service.title}`}>
                    See how it works</Link>
                    </motion.div>
                ))
            }
        </div>
    </section>
    </div>
  )
}

export default Services