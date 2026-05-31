import React from 'react'
import Title from './Title'
import assets,{teamData} from '../assets/assets'
import { motion } from 'framer-motion'

const Teams = () => {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.75 } }
  }

  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.035, boxShadow: '0 14px 40px rgba(16,24,40,0.08)', transition: { duration: 0.18 } }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className='container mx-auto flex flex-col items-center gap-7 px-4 sm:px-6 lg:px-8 py-12 text-gray-700 dark:text-white'
    >
      <Title title='Meet Our Team' desc='Our team of experts is dedicated to delivering exceptional results for our clients.' />

      <motion.div
       className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 w-full max-w-6xl'>
        {teamData.map((member, index) => (
          <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md dark:shadow-black/10 cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-200"
          >
            <img src={member.image} alt={member.name} className='w-12 h-12 rounded-full' />
            <div className='flex-1'>
              <h3 className='font-bold text-sm'>{member.name}</h3>
              <p className='text-sm opacity-60'>{member.title}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Teams