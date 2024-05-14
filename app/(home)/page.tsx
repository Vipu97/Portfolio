import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Skills from './components/Skills';
import Project from './components/Project';
import Footer from './components/Footer';

const page = () => {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      <div className='dark:bg-black bg-white  dark:bg-grid-white/[0.05] 
        bg-grid-black/[0.2] relative'>
        <div className='max-w-7xl mx-auto p-5 sm:px-10 space-y-10'>
          <Navbar className={'py-10 flex justify-between'}/>
          <Hero />
        </div>
      </div>
      <div className='max-w-7xl mx-auto p-5 mt-24'>
        <Skills />
        <Project />
        <Footer />
      </div>

    </div>
  )
}

export default page