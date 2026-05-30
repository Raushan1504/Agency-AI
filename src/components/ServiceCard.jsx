import React, {useState} from 'react'

const ServiceCard = ({ service, index }) => {
     const [visible,setVisibility] = useState(false);

  return (
      <div className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10 bg-white dark:bg-gray-900 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer'>
          <div className={`pointer-events-none blur-2xl rounded-full bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 w-75 h-75 absolute -top-16 -left-16 ${visible ? 'opacity-70' : 'opacity-0'} mix-blend-lighten`} />
          <div className='relative z-10 flex items-center gap-6 p-8 rounded-3xl bg-white/95 dark:bg-gray-800'>
                <div className='bg-gray-100 dark:bg-gray-700 rounded-full'>
                      <img src={service.icon} alt='' className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2' />
                </div>
               <div className='flex-1'>
                <h2 className='text-xl font-bold text-gray-800 dark:text-gray-200 mb-2'>{service.title}</h2>
                <p className='text-gray-600 dark:text-gray-200'>{service.description}</p>
               </div>
          </div>
      </div>
      )
}

export default ServiceCard