import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn';

const Navbar = ({theme,setTheme}) => {
const [sideBarOpen, setSideBarOpen] = useState(false);

return (
 <div className='flex justify-between items-center px-4
 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20
 backdrop-blur-xl font-medium bg-white/80 dark:bg-gray-900/70'>
<img src = {theme === 'dark' ? assets.logo_dark: assets.logo} className='w-32 sm:w-40' alt = 'logo'/>
    <div className={`dark:text-white sm:text-sm ${!sideBarOpen ? 'max-sm:w-0 max-sm:overflow-hidden max-sm:hidden':'max-sm:w-60 max-sm:pl-10 max-sm:flex'} flex flex-row items-center justify-center gap-6 text-gray-700 transition-all`}>
            <img src={assets.close_icon} alt="" className='w-5 absolute right-4 top-4 sm:hidden' onClick={() => setSideBarOpen(false)} />
            <a onClick = {()=>setSideBarOpen(false)} href="#" className='hover:text-primary transition-colors'>Home</a>
            <a onClick = {()=>setSideBarOpen(false)} href="#services" className='hover:text-primary transition-colors'>Services</a>
            <a onClick = {()=>setSideBarOpen(false)} href="#OurWork" className='hover:text-primary transition-colors'>Our Work</a>
            <a onClick = {()=>setSideBarOpen(false)} href="#contact-us" className='hover:text-primary transition-colors'>Contact Us</a>
    </div>
    
   
        <div className='flex items-center gap-2 sm:gap-4'>
            <ThemeToggleBtn theme={theme} setTheme={setTheme} />
                <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="menu" onClick={()=>setSideBarOpen(true)} className='w-8 sm:hidden ' />
                <a href="#contact-us" className='text-sm flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all max-sm:hidden'>
                    Connect <img src={assets.arrow_icon} width={14} alt="" />
                </a>
        </div>

</div>


)
}

export default Navbar;
