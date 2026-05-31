import React from 'react'
import {motion} from 'framer-motion'
const Title = ({ title, desc }) => {
    return (
        <>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='text-3xl sm:text-5xl  font-medium text-gray-800 dark:text-white mb-4'
            >
                {title}
            </motion.h2>

            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6 p-5'
            >
                {desc}
            </motion.p>
        </>
    )
}

export default Title