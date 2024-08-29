import { motion } from 'framer-motion'
import React from 'react'
import {
  FaTelegram,
  FaInstagram,
  FaFacebook,
  FaArrowRight,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const container = (delay) => ({
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: delay,
    },
  },
})

const Hero = () => {
  return (
    <>
      <main className="bg-gray text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3  gap-12 min-h-[600px] lg:overflow-y-hidden place-items-center py-20 md:py-0 overflow-x-hidden">
            {/* 圖片區 */}
            <div className="grid col-span-2 relative h-full justify-center items-center ">
              <div className="w-[280px] sm:w-[400px] md:w-[450px]">
                <motion.h1
                  variants={container(0.2)}
                  initial="hidden"
                  whileInView="show"
                  className="text-4xl md:text-6xl font-bold relative z-20"
                >
                  Aio Digital <br />
                  Technology.
                </motion.h1>
                <motion.div
                  variants={container(0.6)}
                  initial="hidden"
                  whileInView="show"
                  className="h-[4px] w-[100px] bg-primary mt-4"
                ></motion.div>
                {/* 外鏈icon */}
                <div className="flex gap-6 mt-24">
                  <motion.div
                    variants={container(0.8)}
                    initial="hidden"
                    whileInView="show"
                  >
                    <FaTelegram className="text-2xl hover:scale-110 cursor-pointer  duration-200" />
                  </motion.div>
                  <motion.div
                    variants={container(1)}
                    initial="hidden"
                    whileInView="show"
                  >
                    <FaInstagram className="text-2xl hover:scale-110 cursor-pointer duration-200" />
                  </motion.div>
                  <motion.div
                    variants={container(1.2)}
                    initial="hidden"
                    whileInView="show"
                  >
                    <FaFacebook className="text-2xl hover:scale-110 cursor-pointer duration-200" />
                  </motion.div>
                </div>
              </div>
              <div className="absolute -right-6 md:-right-32 bottom-0">
                {/* <img
                  src={Person}
                  alt=""
                  className=" scale-110 relative z-10 w-[150px]  sm:w-[250px] md:w-full"
                /> */}
              </div>
            </div>
            {/* 文字區 */}
            <div className="space-y-7">
              <motion.p
                variants={container(0.4)}
                initial="hidden"
                whileInView="show"
                className="text-sm opacity-50 tracking-widest font-serif translate-y-3"
              >
                - About Us
              </motion.p>
              <motion.h1
                variants={container(0.5)}
                initial="hidden"
                whileInView="show"
                className="text-2xl lg:text-3xl"
              >
                CT Wallet.
              </motion.h1>
              <motion.p
                variants={container(0.6)}
                initial="hidden"
                whileInView="show"
                className="text-sm leading-6 opacity-70"
              >
                Leading brand in global blockchain development
              </motion.p>
              <Link to="/product">
                <motion.button
                  variants={container(0.7)}
                  initial="hidden"
                  whileInView="show"
                  className="text-primary  border-b-2 border-primary text-xl font-bold py-1 flex items-center gap-4 group"
                >
                  Learn more
                  <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero
