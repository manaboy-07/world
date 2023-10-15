/** @format */

"use client";

import { useState } from "react";

export default function Navbar({darkMode, toggleDarkMode}) {
  
  return (
    <div className={`mb-4 flex justify-between p-4 mt-0 ${darkMode ? 'bg-slate-800 nav-shadow-dark': 'bg-slate-100 nav-shadow-light'}`}>
      <div className='text-3xl font-bold'>
        <h1 className={`${darkMode  ? 'text-white' : 'text-black'}`} >Where in the world ?</h1>
      </div>
      <div className='mode'>
        <button
          className='outline-none'
          style={{
            width: "180px",
            height: "29px",
          }}>
          {/* moon icon */}
          <h3 className={`${darkMode ? 'text-white' : 'text-black'}`} onClick={toggleDarkMode}>{darkMode ? 'Light Mode':'Dark Mode'}</h3>
        </button>
      </div>
    </div>
  );
}
