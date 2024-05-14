'use client';
import { MovingBorderButton } from '@/components/ui/movingBorder'
import Link from 'next/link'
import React from 'react'
import Title from './Title'

const Hero = () => {

    const handleDownloadResume = () => {
        const pdfUrl = '/Resume.pdf';
        console.log("dgsd")

        fetch(pdfUrl)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'vipin_resume.pdf');
                document.body.appendChild(link);
                link.click();
            })
            .catch(error => {
                console.error('Error downloading PDF:', error);
            });
    }
    return (
        <div className='min-h-[60vh] flex flex-col-reverse gap-y-16 lg:flex-row items-center justify-between animate-move-up'>
            {/* left-part */}
            <div className='space-y-10 text-center lg:text-left'>
                <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold'>Nice to meet you! 👋 <br />
                    <span className='underline underline-offset-8 decoration-green-500'>{"I'm Vipin Kiroula"}</span>
                </h1>
                <p className='md:w-96 text-lg text-gray-300'>{"Based in New Delhi,India. I'm a Fullstack developer passionate about building a modern web application that users love."}</p>
                <Link href={"mailto:vipinkiroula@gmail.com"} className='inline-block group'>
                    <Title text={'Contact Me 📮'} />
                </Link>
            </div>

            {/* right part */}
            <div className='relative'>
                <div className='w-72 h-72 -rotate-[30deg] relative'>
                    <div className='flex gap-3 translate-x-8'>
                        <div className='w-56 h-32 rounded-2xl bg-green-500'></div>
                        <div className='w-56 h-36 bg-indigo-500 rounded-full'></div>
                    </div>
                    <div className='flex gap-3 -translate-x-8'>
                        <div className='w-56 h-32 rounded-2xl bg-indigo-500'></div>
                        <div className='w-56 h-36 rounded-full bg-green-500'></div>
                    </div>
                    <div className='glow absolute top-[40%] right-1/2 -z-10'></div>
                </div>
                <div className='absolute bottom-5 sm:bottom-14 left-0 sm:-left-10' onClick={handleDownloadResume}>
                    <MovingBorderButton borderRadius='0.5rem' className='p-2.5 font-semibold'>
                        <p>💼 See My Resume</p>
                    </MovingBorderButton>

                </div>
            </div>
        </div>
    )
}

export default Hero