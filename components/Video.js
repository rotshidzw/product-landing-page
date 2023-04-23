import React from 'react'
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
const HeroSection = () => {
  const scrollToSubscribe = () => {
    const subscribeSection = document.querySelector('#button-section');
    subscribeSection.scrollIntoView({ behavior: 'smooth' });
  };
  const videoSrc = '';
  
  return (
    <>
    <div className="grid grid-cols-2 ">
    <div className="col-span-2 md:col-span-1 bg-black p-4">
    <div className="relative h-screen md:h-[500px] flex items-center justify-center">
  <ReactPlayer
    url="https://video.wixstatic.com/video/84770f_eebeb88852b14e86a5c8fca260701e0f/720p/mp4/file.mp4"
    playing={true}
    controls={false}
    muted={true}
    loop={true}
    width="100%"
    height="100%"
    className="absolute top-0 left-0"
  />
</div> 
 </div>
 <div className="col-span-2 md:col-span-1 md:bg-[#1D1D1D] p-4 md:mb-36">
 <div>
 <div className=" flex-wrap justify-center items-center">
  <div className="w-full md:w-1/2 md:flex hidden">
    <ReactPlayer
      url="https://video.wixstatic.com/video/84770f_b2310558938447fe943e72537803ba21/480p/mp4/file.mp4"
      playing={true}
      controls={false}
      muted={true}
      loop={true}
      width={400}
      height={300}
    />
  </div>
  <div className="w-full md:w-1/2 md:text-center text-left ">
    <motion.p className="text-white text-xl"
    initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8 }}>Bold, Daring, Different Footwear.</motion.p>
    <motion.h1 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }} className="md:text-8xl text-6xl mb-4 text-white"><b>PWR</b>275</motion.h1>
    <motion.button 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.7, delay: 1 }} className="bg-yellow-400 text-gray-800 py-2 px-8 rounded hover:bg-gray-100  flex items-center justify-center mt-6" onClick={scrollToSubscribe}>
      <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.293 7.707a1 1 0 011.414 0L10 12.586l4.293-4.293a1 1 0 111.414 1.414l-4.586 4.586a1 1 0 01-1.414 0l-4.586-4.586a1 1 0 010-1.414z" />
      </svg>
      <span>Explore </span>
    </motion.button>
  </div>
</div>
</div>
</div>
</div>
 </> 
  )
}

export default HeroSection