'use client'
import Link from "next/link";
import CustomSlider from "./CustomSlider";
import { Build1, Build2, Build4 } from "@/consants";



const Hero = () => {
    // Convert StaticImageData objects to strings (URLs)
    const contentImages = [Build1, Build2, Build4].map(image => image.src);   
    return (
        <section className="hero mt-4 mb-12" aria-labelledby="hero-heading">
            <div className="flex flex-col lg:flex-row h-full justify-start gap-[8%] items-center p-4">
                {/* Content side */}
                <div className="w-full lg:w-1/2 h-full flex flex-col items-start justify-center 
                p-8 md:pt-8 lg:p-12 gap-4">
                    <span className="font-base text-brand-100 text-xl md:text-2xl">New Projects</span>
                    <h3 className="h1 text-brand">
                        The future of property investing.
                    </h3>
                    <p className="text-black text-lg p-2 leading-[1.5] text-justify">
                        Explore urban brilliance<br />
                        with Oyster Properties offering a
                        diverse collection of dream homes and dynamic
                        workspaces that redefine luxury living and
                        workspace innovation.
                    </p>
                    <Link href="/Products" className="btn">
                        Get started
                    </Link>
                </div>

                {/* Image side */}
                <div className="flex justify-center items-center w-full h-[400px] lg:w-1/2 p-4 lg:p-6 rounded-md">
                    <CustomSlider
                        items={contentImages } 
                        slideImgClass='rounded-lg h-full'
                        largeCont='rounded-lg h-full'
                        slideContClass='rounded-lg h-full'
                        width={700}
                        height={700}
                        />
                </div>
            </div>
        </section>
    )
}

export default Hero;