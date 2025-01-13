import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio/portfolio'
import Reviews from '@/components/Reviews'
import Services from '@/components/Services'

import React from 'react'

const page = () => {

  
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <Reviews />
    </div>
  )
}

export default page