import React from 'react'
import { MdAccountBalanceWallet } from 'react-icons/md'
import { FaScaleBalanced } from 'react-icons/fa6'
import { FaBitcoin } from 'react-icons/fa'
import { motion } from 'framer-motion'

const fadeUp = (delay) => ({
  hidden: {
    opacity: 0,
    y: 50,
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

const ItemList = [
  {
    id: 1,
    title: 'Cryptocurrency Exchanges ',
    delay: 0.2,
    description:
      'Building your own cryptocurrency exchanges, achieving your blockchain business. Professional UX/UX designer, providing the best design. Create your own cryptocurrency exchange with our customized service!',
    icon: (
      <FaScaleBalanced className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
  },
  {
    id: 2,
    title: 'Blockchain Wallet Development ',
    delay: 0.4,
    description:
      'With our blockchain technology, knowledge and experience. Our blockchain developers will easily develop the blockchain wallet that can retain multi-chain and hold multi-crypto currency.',
    icon: (
      <MdAccountBalanceWallet className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
  },
  {
    id: 3,
    title: 'Cryptocurrency Exchanges',
    delay: 0.6,
    description:
      'Able to conduct cryptocurrency transactions safely. Our payment system allows you to connect with your business model easily. Customize crypto payment systems according to your requirements.',
    icon: (
      <FaBitcoin className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
  },
]

const ServiceItems = () => {
  return (
    <div className="py-14 bg-darkGray text-white sm:min-h[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {ItemList.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp(item.delay)}
              initial="hidden"
              whileInView="show"
              className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-gray hover:bg-primary/80 duration-300 hover:text-black rounded-lg"
            >
              <div className="grid place-items-center">{item.icon}</div>
              <h1 className="text-2xl xl:text-3xl font-bold">{item.title}</h1>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceItems
