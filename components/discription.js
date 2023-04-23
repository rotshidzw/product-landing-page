import React from 'react'
import { motion } from 'framer-motion';
const discription = () => {
  return (
<div className="flex flex-col md:flex-row " id="button-section">
  <div className="mx-auto md:mx-0 md:mr-4 lg:px-4 md:py-2">
    {/* eslint-disable no-alert, no-console */}
    <img src="https://static.wixstatic.com/media/ea71bb_04c997e7bb27468b920c24a2ced8a969~mv2.jpg/v1/fill/w_297,h_487,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_04c997e7bb27468b920c24a2ced8a969~mv2.jpg" alt="First image" className="w-full lg:w-[550px] h-auto lg:h-[500px]" />
  </div>
  <div className="lg:px-20 px-12 py-4 text-white">
    <h2 className="text-lg md:text-xl lg:text-2xl">In an Ordinary World,</h2> 
    <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold leading-tight">BE EXTRA-ORDINARY</h1>
    <motion.p 
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}className="text-md px-4 max-w-lg md:max-w-lg md:px-0 whitespace-normal">
            Click here to add your own text and edit me. It’s easy.
            Just click “Edit Text” or double click me to add your own content and make changes to the font. 
    </motion.p>
    <button className="bg-yellow-400 text-gray-800 py-2 px-8 rounded hover:bg-gray-100  flex items-center justify-center mt-6">
      <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.293 7.707a1 1 0 011.414 0L10 12.586l4.293-4.293a1 1 0 111.414 1.414l-4.586 4.586a1 1 0 01-1.414 0l-4.586-4.586a1 1 0 010-1.414z" />
      </svg>
      <span>SIGN UP </span>
    </button>
  </div>
  <div className="mx-auto md:mx-0 md:ml-4 mt-4 lg:px-12 md:mt-[250px] md:items-start md:justify-start">
    {/* eslint-disable no-alert, no-console */}
    <img src="https://static.wixstatic.com/media/84770f_52f514cddd4e4529bece033f6c99566c~mv2.jpg/v1/fill/w_197,h_262,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_52f514cddd4e4529bece033f6c99566c~mv2.jpg" alt="Second image" className="w-full md:w-[250px] h-auto md:h-[200px]" />
  </div>
</div>

  )
}

export default discription