import React from 'react'

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto min-h-screen flex gap-x-12 items-center">
      {/* Left Side */}
      <div className='space-y-4 w-3/5'>
        <p className='text-blue-600 font-semibold mb-2'>
          Welcome to my Portfolio
        </p>
        <h1 className='text-5xl font-bold mb-5 leading-tight'>
          Hi I'm <span >Muhammad Ali</span>
        </h1>
        <p className='max-w-4/5'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, saepe nesciunt? Minus sequi autem temporibus!
        </p>
        <div className='flex gap-x-4'>
          <button className='bg-blue-600 text-white px-5 py-3 rounded transition border hover:border-blue-600 hover:text-blue-600 hover:bg-white'>
            View Projects
          </button>
          <button className='px-5 py-3 rounded transition border border-blue-600 text-blue-600 hover:bg-blue-700 hover:text-white transition'>
            Contact Me
          </button>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex '>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1N0wLKhyZ5_5yrJ97ebZ2eFFFH9SGjdhcinjJJodzdA&s" alt="Muhammad Ali"
          className='w-80 h-80 object-cover rounded-full' />
      </div>
    </section>
  )
}
