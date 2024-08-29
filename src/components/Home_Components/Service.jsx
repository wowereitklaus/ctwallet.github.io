import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = (delay) => ({
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: delay,
    },
  },
})

const Service = () => {
  return (
    <main className="bg-darkGray text-white">
      <div className="container py-20 lg:py-26">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* 左側區塊 */}
          <section className="space-y-7 lg:max-w-[380px] ">
            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="show"
              className="text-sm opacity-50 tracking-widest font-serif translate-y-3"
            >
              - Service
            </motion.p>
            <motion.h1
              variants={fadeUp(0.4)}
              initial="hidden"
              whileInView="show"
              className="text-2xl lg:text-3xl"
            >
              Development <br />
              service area.
            </motion.h1>
            <motion.p
              variants={fadeUp(0.6)}
              initial="hidden"
              whileInView="show"
              className="text-sm leading-6 opacity-70"
            >
              From DApp through smart contract and blockchain wallet...etc. AIO
              Digital Technology offers a customized blockchain development
              service.
            </motion.p>
            <Link to="/Service">
              <motion.button
                variants={fadeUp(0.8)}
                initial="hidden"
                whileInView="show"
                className="text-primary  border-b-2 border-primary text-xl font-bold py-1 flex items-center gap-4 group mt-2"
              >
                Welcome to the Service Page.
                <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
              </motion.button>
            </Link>
          </section>
          {/* 右側區塊 */}
          <section className="space-y-9">
            <motion.p
              variants={fadeUp(0.4)}
              initial="hidden"
              whileInView="show"
              className="text-3xl mt-3"
            >
              Our Goal
            </motion.p>
            <motion.p
              variants={fadeUp(0.6)}
              initial="hidden"
              whileInView="show"
              className="text-sm leading-6 opacity-70"
            >
              Our vision is to become one of the world's best blockchain
              development company to assist all customers expanding their own
              business or new business. Our mission is to achieve the
              expectations of our customers, continuously update technical
              capabilities, and provide the best blockchain technology with the
              most efficient agile development model.
            </motion.p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex gap-3 items-center">
                <motion.p
                  variants={fadeUp(1)}
                  initial="hidden"
                  whileInView="show"
                  className="text-5xl xl:text-6xl  text-primary font-bold"
                >
                  1,435,000
                </motion.p>
                <motion.p
                  variants={fadeUp(0.8)}
                  initial="hidden"
                  whileInView="show"
                  className="font-semibold max-w-[100px]"
                >
                  web developers
                </motion.p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Service
