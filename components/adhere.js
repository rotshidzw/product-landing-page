import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Adhere = () => {
  return (
    <div className="flex flex-col lg:flex-row pt-[400px] sm:py-[300px] lg:pt-10 ">
      <motion.div 
        className="lg:w-1/2 flex items-center justify-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-md py-16 px-8">
            <h2 className="lg:text-4xl text-xl text-white">Get the Limited Edition</h2>
          <h1 className="lg:text-9xl text-4xl font-bold text-white mb-8">coming soon</h1>
          <button className="bg-yellow-500 hover:bg-white text-black text-xl font-bold py-4 px-8 rounded">
            Shop Now
          </button>
        </div>
      </motion.div>
      <motion.div 
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="h-64 lg:h-full relative">
          <motion.img 
            src="https://static.wixstatic.com/media/84770f_e9abe9f6bbcd4e968432ed6dcfc946ce~mv2.png/v1/fill/w_703,h_512,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_e9abe9f6bbcd4e968432ed6dcfc946ce~mv2.png" 
            alt="Limited Edition" 
            className="mx-auto md:max-w-full md:h-auto h-[250px]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Adhere;
