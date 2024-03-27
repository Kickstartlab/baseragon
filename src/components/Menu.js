import React, { useState } from 'react'
import logo from '../assets/logo.png';



export default function Menu() {

  const [show, setShow] = useState(false);


  return (

    <header>
      <div className="lg:flex hidden items-center justify-between font-opensans  text-white-100 h-28">
        <a href="/" className="logo lg:my-12">
          <img src={logo} alt="Logo" />
        </a>

        <nav>
          <ul className="flex justify-center gap-10 items-center text-white-50">
            <li><a href="/" className="hover:text-white-100">Home</a></li>
            <li><a href="#about" className="hover:text-white-100">About</a></li>
            <li><a href="#roadmap" className="hover:text-white-100">Roadmap</a></li>
            <li><a href="#contact" className="hover:text-white-100">Contact</a></li>
          </ul>
        </nav>

        <a href="/">
          <button className="bg-blue-100 rounded-xl font-semibold border-2 border-blue-100 py-3 md:px-8 px-3">
          Connect to BASE
          </button>
        </a>
      </div>

      <div className="lg:hidden flex items-center justify-between pt-5 font-opensans">
        <a href="/" className="text-white-100">
          <img src={logo} alt="Logo" />
        </a>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>

        </button>
      </div>

      {
        show ? <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-3/4 overflow-y-auto text-center font-opensans font-semibold bg-black-50 z-20" style={{ left: "0" }}>

          <div className="mt-3 px-3 mb-12">
            <a href="/" className="text-white-100">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md transition duration-500 cursor-pointer  text-white-100">
            <a href="/" className="text-lg ml-4 font-semibold">Home</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-white-100 text-white-100">
            <a href="#about" className="text-lg ml-4 font-semibold">About</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="#roadmap" className="text-lg ml-4 font-semibold">Roadmap</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="#contact" className="text-lg ml-4 font-semibold">Contact</a>
          </button>
        </div> : null
      }


    </header >
  )
}
