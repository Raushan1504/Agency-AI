import React from 'react'
import { motion } from 'framer-motion'

const ServiceCard = ({ service }) => {
      const item = {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: 'easeOut' } },
            hover: { y: -6, transition: { duration: 0.18 } }
      }

      return (
            <motion.div
                  layout
                  variants={item}
                  whileHover="hover"
                  className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl shadow-gray-100 dark:shadow-white/10 bg-white dark:bg-gray-900 transition-shadow duration-300 cursor-pointer"
            >
                  <div className="pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-72 h-72 absolute -top-16 -left-16 opacity-70 mix-blend-lighten" />

                  <div className="relative z-10 flex items-center gap-6 p-8 rounded-3xl bg-white/95 dark:bg-gray-800">
                        <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-1">
                              <img src={service.icon} alt="" className="w-10 h-10 bg-white dark:bg-gray-900 rounded-full" />
                        </div>
                        <div className="flex-1">
                              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">{service.title}</h2>
                              <p className="text-gray-600 dark:text-gray-200">{service.description}</p>
                        </div>
                  </div>
            </motion.div>
      )
}

export default ServiceCard