import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from 'framer-motion'
const OurWork = () => {

    const workData = [
        {
            title: 'Mobile app marketing',
            description:
                'We turn bold ideas into powerful digital solutions that connect, engage...',
            image: assets.work_mobile_app,
        },
        {
            title: 'Dashboard management',
            description:
                'We help you execute your plan and deliver results.',
            image: assets.work_dashboard_management,
        },
        {
            title: 'Fitness app promotion',
            description:
                'We turn bold ideas into powerful digital solutions that connect, engage...',
            image: assets.work_fitness_app,
        },

    ]
    const container = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.18 } }
    }

    const item = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
        hover: { scale: 1.02, transition: { duration: 0.18 } }
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            id='our-work'
            className='container mx-auto flex flex-col items-center gap-7 px-4 sm:px-6 lg:px-8 py-12 text-gray-700 dark:text-white'
        >
       <Title title='Our Latest Work' desc='Check out some of our latest projects and see the quality of our work.' />
       <div className = 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
        {
            workData.map((work, index) => (
                                <motion.div
                                    key={index}
                                    variants={item}
                                    whileHover="hover"
                                    className='duration-300 cursor-pointer'
                                >
                                    <img src={work.image} alt={work.title} className='w-full rounded-xl' />
                                    <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                                    <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                                </motion.div>
            ))
        }
       </div>
    </motion.div>

     
  )
}
export default OurWork