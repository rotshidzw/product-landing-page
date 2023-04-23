import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const technology = () => {
  return (
    <>
      <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.8 }} className="text-xl text-white bg-black text-center md:pr-52">Groundbreaking</motion.div>
      <div className="text-white text-center md:text-9xl text-6xl font-bold">Technology</div>
    <div className="flex flex-col md:flex-row h-screen">
      <div className="relative w-full md:w-1/2">
        <div className="absolute inset-0">
          <iframe
            className="w-full sm:block hidden h-full sm:w-[450px] sm:h-[280px] lg:w-[600px] lg:h-[500px]"
            src="https://www.youtube.com/embed/0KKOjFULFZ4?autoplay=1&mute=1&controls=0&loop=1"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8 }} className="hidden  md:block text-center bg-black text-white md:px-24 py-12">
            Professional Power
            I am a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
            click me to add your own content and make changes to the font. I’m a great place for you to tell a story.
          </motion.p>
        </div>
      </div>

      <div className="flex items-center justify-center w-full   py-16 md:w-1/2">
        <div className="max-w-lg">
          <motion.p 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8 }}
          className="text-center text-white ">
            Professional Power
            I am a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
            click me to add your own content and make changes to the font. I’m a great place for you to tell a story.
          </motion.p>
        </div>
      </div>

      <div className="sm:hidden  py-16">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/0KKOjFULFZ4?autoplay=1&mute=1&controls=0&loop=1"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.8 }} className="text-center  bg-black text-white px-6 py-12">
          Professional Power
          I am a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
          click me to add your own content and make changes to the font. I’m a great place for you to tell a story.
        </motion.p>
      </div>
    </div>
    </>
  );
};

export default technology;
