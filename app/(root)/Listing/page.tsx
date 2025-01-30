import CustomSlider from '@/components/CustomSlider'
import { fetchListings } from '@/utils/actions/file.actions'
import Image from 'next/image'
import React from 'react'

const Page = async () => {
    const listings = await fetchListings()
    console.log(listings)
  
    return (
        <div>
            <div className='header w-full h-[calc(100vh-100px)] relative'>
                <Image src='/assets/images/manor.jpg' alt='manor' className='w-full h-full' width={1000} height={1000} />
                <div className='textbox absolute left-10 top-20 w-[60%] bg-white text-brand p-10'>
                    <h1 className='h1'>Our Current Listing</h1>
                    <p>
                        Discover a diverse range of properties designed to match your unique lifestyle and needs. 
                        Whether you&apos;re searching for your dream home, a smart investment, or a cozy rental, we have something for everyone.
                    </p>
                </div>
            </div>
            <div className='flex flex-wrap gap-8 justify-center items-center mt-20'>
                {
                    listings?.map((listing, index) => (
                        <div key={index} className='flex flex-col w-[25rem] h-[25rem] rounded-lg border-[1px] border-red-200'>
                            <CustomSlider 
                                items={listing.images}
                                width={400}
                                height={400}
                            />
                            <div className='desc flex flex-col p-8'>
                                <div className='flex'>
                                    <h1>{listing.ProjectName}</h1>
                                    <h2>{listing.ProjectAmount}</h2>
                                </div>
                                <div className='flex'>
                                    <h1>{listing.Service}</h1>
                                    <h2>{listing.ProjectType}</h2>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Page
