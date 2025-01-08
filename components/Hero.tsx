'use client'
import Image from "next/image";
import Link from "next/link";
import CustomSlider from "./CustomSlider";
import { Build1, Build2, Build4 } from "@/consants";



const Hero = () => {
    const contentImages = [Build1,Build2, Build4];   
    return (
        <section className="hero mt-4" aria-labelledby="hero-heading">
            <div className="flex flex-col lg:flex-row h-full justify-start gap-[8%] items-center">
                {/* Content side */}
                <div className="w-full lg:w-1/2 h-full flex flex-col items-start justify-center 
                p-9 md:pt-12 lg:p-16 gap-4">
                    <span className="font-bold text-brand text-xl md:text-2xl">New Projects</span>
                    <h3 className="h1">
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
                <div className="flex justify-center items-center w-full h-[400px] lg:w-1/2 p-2 rounded-md">
                    <CustomSlider
                        items={contentImages}
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