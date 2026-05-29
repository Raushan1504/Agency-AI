import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
      <div className='flex flex-col items-center justify-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>

          <div className='inline-flex items-center gap-1 border border-gray-300 p-2 rounded-full'>
              <img
                  src={assets.group_profile}
                  alt="hero"
                  className='w-20'
              />
              <p className='text-xs text-primary font-medium'>
                  Trusted by 10K + people
              </p>
          </div>

          <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-23.75 max-w-5xl'>Turning imagination into <span className='bg-linear-to-r from-[#5044e5] to-[#4d8cea] text-transparent bg-clip-text'>digital</span> impact.</h1>
          <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>
              Creating meaningful connections and turning ideas into reality.
          </p>
          <div className = 'relative'>
              <img src={assets.hero_img} alt="hero" className='w-full max-w-6xl' />
              <img src = {assets.bgImage1} alt = "bg" className = 'absolute -top-40 -right-40 sm:-top-100 sm:-right-70px -z-1 dark:hidden'/>
          </div>
          


      </div>
    
     
      
    
  )
}

export default Hero