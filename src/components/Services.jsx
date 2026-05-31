import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import{motion} from 'framer-motion'

const Services = () => {

const services = [
    {
        title : 'Advertising', 
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.',
        icon : assets.ads_icon
    },
    {
        title: 'Content marketing',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.',
        icon: assets.marketing_icon
    },
    {
        title: 'Content writing',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.',
        icon: assets.content_icon,
    },
    {
        title: 'Social Media',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.',
        icon: assets.social_icon
    }
]
  return (
    <motion.div 
        initial="hidden"
        whileInView = "visible"
        transition = {{ staggerChildren: 0.2 }}
        viewport = {{ once: true }}
    
    id='services' className='container mx-auto relative flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 text-gray-700 dark:text-white'>
      <img src={assets.bgImage2} alt='bg' className='absolute -top-28 -left-24 -z-1 dark:hidden'/>
      <Title title='How can we help?' desc='From startegy to execution, we craft digital solutions that move your buisness forword.' />
          <div
               className='flex flex-col md:grid grid-cols-2 '>
            {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
            ))}
            
          </div>
    </motion.div>

    
  )
}

export default Services