import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

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
    <div id='services' className='relative flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <img src={assets.bgImage2} alt='bg' className='absolute -top-110 -left-70 -z-1 dark:hidden'/>
      <Title title='How can we help?' desc='From startegy to execution, we craft digital solutions that move your buisness forword.' />
          <div className='flex flex-col md:grid grid-cols-2 '>
            {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
            ))}
            
          </div>
    </div>

    
  )
}

export default Services