import React from 'react'
import { motion } from 'framer-motion'

const testimonialList = [
  {
    id: 1,
    name: 'Lisa Driver, MI',
    text: 'Have customers review you and share what they had to say. Click to edit and add their testimonial.. Sed faucibus, nunc a viverra',
    img: 'https://picsum.photos/200',
  },
  {
    id: 2,
    name: 'TangTech CEO',
    text: 'Testimonials are a great way to share positive feedback you have received and encourage others to work with you. Add your own here.',
    img: 'https://picsum.photos/200',
  },
  {
    id: 3,
    name: 'Morgan James, NY',
    text: 'Have customers review you and share what they had to say. Click to edit and add their testimonial.',
    img: 'https://picsum.photos/200',
  },
]

const Testimonial = () => {
  return (
    <div className="py-10 bg-gray ">
      <div className="container">
        {/* 關於我們 */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 20,
              damping: 10,
              delay: 0.2,
            }}
            className="text-3xl font-bold text-primary"
          >
            Why Choose Us ?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 20,
              damping: 10,
              delay: 0.4,
            }}
            className=" text-gray-400 mt-2 text-white"
          >
            Providing hundreds of customers with blockchain implementation and
            giving innovative idea Proficient Blockchain Developers Modern
            Blockchain Technology and Strategy Innovative Customized Solutions
            Personal Blockchain Consultant
          </motion.p>
        </div>
        {/* 顧客反饋 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black ">
          {testimonialList.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 80,
                damping: 10,
                delay: 0.6,
              }}
              className="card text-center group space-y-3 sm:space-y-6 p-4 bg-[#ffffff6b] sm:py-12 duration-300 rounded-xl"
            >
              <div className="grid place-items-center">
                <img src={item.img} alt="" className="h-20 w-20 rounded-full" />
              </div>
              <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              <p>{item.text}</p>
              <p className="font-semibold text-center">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
