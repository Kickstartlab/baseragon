import React from 'react'



export default function Footer() {
  return (
    <div id='contact' className="font-montserat py-5">
      <footer className='container mx-auto lg:px-20 font-montserat px-5'>

        <div className="flex flex-col items-center justify-center gap-y-8 mx-auto">

          <h2 className='md:text-5xl text-2xl font-vinque font-semibold text-white-100'>
            Don't miss out, Stay updated
          </h2>

          <div className="py-1 pl-6 pr-1 lg:w-8/12 w-full lg:bg-blue-100 lg:space-y-0 space-y-5 lg:flex items-center justify-between rounded-full">
            <input type="email" placeholder="Enter your email" id="email" required="" className="lg:p-0 p-5 lg:rounded-none rounded-full bg-blue-100 focus:ring-0 focus:outline-none lg:w-9/12 w-full placeholder-white-100" />

            <button className='lg:px-12 px-5 lg:py-3 py-2 bg-white-100 rounded-full text-blue-100 uppercase font-semibold'>
              Subcribe
            </button>
          </div>

          <div className='text-center lg:w-1/2 flex mx-auto'>
            <p>
              Don’t hesitate to subscribe to latest news about ICo markets as well as crucial financial knowledge to become successful investors globally
            </p>
          </div>

        </div>

        <p className='pt-8 pb-6 text-center'>© {new Date().getFullYear()} All rights reserved by BaseRagon.</p>
      </footer>
    </div>

  )
}
