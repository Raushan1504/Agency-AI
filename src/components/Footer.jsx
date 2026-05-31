import React from 'react';
import assets from '../assets/assets';
import { motion } from 'framer-motion'
const Footer = ({ theme }) => {
  return (
    <footer className="bg-slate-100 dark:bg-gray-950 pt-12 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] items-start">
          <div className="space-y-5 text-sm text-gray-700 dark:text-gray-300 max-w-xl">
            <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="logo" className="w-32 sm:w-44" />
            <p className="text-base leading-7">From strategy to execution, we craft digital solutions that move your business forward.</p>
            <ul className="flex flex-wrap gap-6 text-sm">
              <li><a href="#home" className="hover:text-primary">Home</a></li>
              <li><a href="#services" className="hover:text-primary">Services</a></li>
              <li><a href="#our-work" className="hover:text-primary">Our Work</a></li>
              <li><a href="#contact-us" className="hover:text-primary">Contact Us</a></li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900/80 text-gray-700 dark:text-gray-300">
            <h3 className="font-semibold text-lg">Subscribe to our newsletter</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">The latest news, articles, and resources, sent to your inbox weekly.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Enter your email" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200" />
              <button className="rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-[#4c53f1]">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} agency.ai. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#home" className="hover:text-primary">Home</a>
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#our-work" className="hover:text-primary">Our Work</a>
            <a href="#contact-us" className="hover:text-primary">Contact Us</a>
          </div>
        </div>

        <hr className="border-slate-200 dark:border-gray-800 my-6" />

        <div className="pb-6 text-sm text-gray-500 dark:text-gray-400 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} © GreatStack - All Right Reserved.</p>
          <div className="flex items-center gap-4">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.instagram_icon} alt="instagram" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;