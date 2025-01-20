'use client'
import Image from 'next/image'
import React from 'react'
import Stars from './Stars'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Reviews = () => {
    const reviews = [
        {
            ratings: 4,
            review: `Finding my dream home was a breeze with Spartan Ives.
                Their team was professional, responsive, and truly cared about my needs.`,
            src: `/assets/images/aslem.jpg`,
            name: 'Aslem Talim',
            service: 'Tenant'
    },
    {
        ratings: 5,
        review: `Spartan Ives provided invaluable insights and helped me achieve a fantastic ROI on my real estate investments.`,
        src: `/assets/images/mindy.jpg`,
        name: 'Maria Adeniyi',
        service: 'Tenant'
},
{
    ratings: 5,
    review: `Spartan Ives delivered outstanding service when selling my property. 
                 Their attention to detail and expert negotiation skills secured a record-breaking price.`,
    src: `/assets/images/Maria.jpg`,
    name: 'Mindy Rhodes',
    service: 'Landlord'
}
]
  return (
    <section className='border-red-200 border-[1px] h-full lg:h-[16rem]'>
        <div className="review-container flex flex-col lg:flex-row items-center h-full  ">
            <div className="describe border-r-[1px] border-red-200  w-full lg:w-[50%] h-full">
                <div className="contain flex flex-col justify-center items-center p-8 gap-4">
                <h2 className='h2 self-start'>Don't just take our word for it</h2>
                <p>Our clients investors are at the heart of what we do – and their feedback speaks 
                    volumes about the success of our property investment mission. Beautiful homes. Sustainable growth.</p>
                <button className=' self-start p-4 rounded-md border-brand text-brand border-[2px] 
                hover:bg-[#880808] hover:text-white hover:transition-all hover:duration-1000'>Read all reviews</button>
                </div>
            </div>
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Autoplay, Pagination]}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              className=' w-full lg:w-[50%] h-full'
          >
              
            {
                    reviews.map((review, index) => (
                        <SwiperSlide key={index} className='swipe flex flex-col justify-center items-centerw-[50%] p-8 
                        h-full bg-red-100 gap-4'>
                        <Stars 
                            rating={review.ratings}
                        />
                        <p className='font-semibold text-brand text-[16px] w-full'>
                            {review.review} </p>
                        <div className="profile flex  gap-2">
                        <div className='rounded-full overflow-hidden border-2 shadow-md w-16 h-16'>
                            <Image 
                                src={review.src}
                                alt='investor'
                                width={100}
                                height={200}
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <div className='flex flex-col'>
                                <h3 className='h3'>{review.name}</h3>
                                <p className=''>{review.service}</p>
                           </div>
                        </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Reviews