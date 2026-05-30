import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast';

const ContactUs = () => {
    const [result, setResult] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault()
        setResult('Sending....')
        const formData = new FormData(event.target)

        formData.append('access_key', '11aa62f6-ef55-4441-848a-e0acd2040555')

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            })

            const data = await response.json()

            if (data.success) {
               toast.success('Message sent successfully!')
               event.target.reset();
            } else {
               toast.error(data.message)
            }
        } catch (err) {
            toast.error('error.message')
        }
    }
  return (
    <div id = 'contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-2 xl:px-40 pt-30 text-gray-700 dark:text-white '>
        <Title title = 'Get in Touch' desc = 'Have a project in mind? We would love to hear from you. Contact us today to discuss how we can help bring your vision to life.' />
        <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
            <div>
                  <p className  = 'mb-2 text-sm font-medium'>Your Name</p>
                  <div className='flex pl-3 rounded-lg border border-gray-200 dark:border-gray-600'>
                      <img src={assets.person_icon} alt='person' />
                      <input type='text' name="name" placeholder='Your Name' className='w-full p-3  text-sm outline-none' required/>
                  </div>
            </div>
              <div>
                  <p className='mb-2 text-sm font-medium'>Your Email</p>
                  <div className='flex pl-3 rounded-lg border border-gray-200 dark:border-gray-600'>
                      <img src={assets.email_icon} alt='person' />
                      <input type='email' name="email" placeholder='Email' className='w-full p-3  text-sm outline-none' required />
                  </div>
              </div>
             <div className='sm:col-span-2'>
                <p className='mb-2 text-sm font-medium'>Your Message(Write NA if none)</p>
                <div className='w-full rounded-lg border border-gray-200 dark:border-gray-600'>
                    <textarea name='message' placeholder='Your Message' className='w-full p-3 text-sm outline-none resize-none h-32' required />
                </div>
             </div>

                 <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all'>
                     Submit<img src={assets.arrow_icon} alt='send' className='w-4' />
                 </button>
                {result && <p className='sm:col-span-2 mt-2 text-sm text-center'>{result}</p>}
            

        </form>
    </div>
  )

}
export default ContactUs