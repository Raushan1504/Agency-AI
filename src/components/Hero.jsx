import React from 'react'
import assets from '../assets/assets'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
      <div className='container mx-auto flex flex-col items-center justify-center gap-6 py-20 px-4 sm:px-6 lg:px-8 text-center w-full overflow-hidden text-gray-700 dark:text-white'>

          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }} 
           className='inline-flex items-center gap-1 border border-gray-300 p-2 rounded-full'>
              <img
                  src={assets.group_profile}
                  alt="hero"
                  className='w-20'
              />
              <p className='text-xs text-primary font-medium'>
                  Trusted by 10K + people
              </p>
          </motion.div>

          <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
           className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-23.75 max-w-5xl'>Turning imagination into <span className='bg-linear-to-r from-[#5044e5] to-[#4d8cea] text-transparent bg-clip-text'>digital</span> impact.</motion.h1>
          <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
           className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>
              Creating meaningful connections and turning ideas into reality.
          </motion.p>
          <motion.div
              initial={{ opacity: 0,scale: 0.9}}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
           className = 'relative'>
              <img src={assets.hero_img} alt="hero" className='w-full max-w-6xl' />
              <img src = {assets.bgImage1} alt = "bg" className = 'absolute -top-40 -right-40 sm:-top-100 sm:-right-70px -z-1 dark:hidden'/>
          </motion.div>
          


      </div>
    
     
      
    
  )
}

export default Hero