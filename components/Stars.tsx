import Image from 'next/image';
import React from 'react'

interface StarsProps {
    rating: number; // Number of stars to display
  }

const Stars = ({rating}: StarsProps) => {
    const starsArray = Array(rating).fill(0)
  return (
    <div className="stars flex gap-1">
        {
            starsArray.map((_, index)=> (
                <Image
                        key={index}
                        src='assets/icons/star.svg'
                        alt='star'
                        width={20}
                        height={20}
                    />
            ))
        }
    </div>
  )
}

export default Stars