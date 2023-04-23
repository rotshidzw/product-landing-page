import React from 'react'
import { motion } from 'framer-motion';
const signin = () => {
  return (
    <div >
 <div className="flex flex-col items-center justify-center h-screen "id="subscribe-section">
    <motion.p
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 1 }} className="text-xl md:text-xl  mb-4 text-white text-left ">Become an Insider.</motion.p> 
    <motion.h1 
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
    className="text-4xl md:text-5xl  mb-4 text-white text-left px-2 lg:px-[400px] md:ml-20">
        Be the First to Know When PWR275 Arrives.
      <span className="ml-8 text-yellow-500">&#8595;</span>
    </motion.h1>
    <div className="max-w-xs md:max-w-lg w-full">
      <form className="flex items-center">
        <input
          type="email"
          className="py-3 px-4  w-64 md:w-[500px] focus:outline-none bg-black text-white border border-yellow-500"
          placeholder="Enter your email"
        />
        
      </form>
      <button
          type="submit"
          className="bg-yellow-500 py-4 md:px-[218px] px-24 text-black font-bold uppercase "
        >
          Sign Up
        </button>
    </div>
</div>
<motion.h1
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 1 }}
  className="text-2xl md:text-4xl font-bold mb-4 text-white text-center">
  Connect to PWR.
    <span className="ml-2 text-yellow-500">&#8595;</span>
  </motion.h1>
  <motion.div initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center">
    <a href="#" className="mx-4 text-lg md:text-xl underline text-white hover:text-yellow-500">
      INSTAGRAM
    </a>
    <a href="#" className="mx-4 text-lg md:text-xl underline text-white hover:text-yellow-500">
      FACEBOOK
    </a>
    <a href="#" className="mx-4 text-lg md:text-xl underline text-white hover:text-yellow-500">
      TWITTER
    </a>
  </motion.div>
</div>




  )
}

export default signin