import React from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({ theme, setTheme }) => {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex items-center justify-center"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <img
        src={isDark ? assets.sun_icon : assets.moon_icon}
        alt={isDark ? 'light' : 'dark'}
        className='size-8.5 p-1.5 border border-gray-500 rounded-full'
      />
    </button>
  )
}

export default ThemeToggleBtn;