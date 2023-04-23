import React from 'react';
import { motion } from "framer-motion";

const Footer = () => {
    const styles = {
        backgroundImage: `url('https://static.wixstatic.com/media/ea71bb_4f6381151e9b431f82c1210950ca5873~mv2.jpg/v1/fill/w_1349,h_575,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_4f6381151e9b431f82c1210950ca5873~mv2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 0.3
    }
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" style={styles}>
      <footer className="text-white px-6 py-32">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
          <motion.div className="mb-8 md:mb-0" variants={itemVariants}>
            <h2 className="text-xl font-bold mb-4">Shoe Box</h2>
            <p className="mb-4">PWR</p>
            <p className="mb-4">Contact<br />123-456-7890<br/>info@mysite.com</p>
          </motion.div>
          <motion.div className="mb-8 md:mb-0" variants={itemVariants}>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <ul>
              <li className="mb-4"><a href="#" className="hover:text-yellow-500">Instagram</a></li>
              <li className="mb-4"><a href="#" className="hover:text-yellow-500">Facebook</a></li>
              <li className="mb-4"><a href="#" className="hover:text-yellow-500">Twitter</a></li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-center">©2023 by rotshidzwa</p>
          </motion.div>
        </div>
      </footer>
    </motion.div>
  )
}

export default Footer;
