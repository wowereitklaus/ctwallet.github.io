import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <main className="bg-darkGray text-white">
      <div className="container py-20 lg:py-26">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* 左側區塊 */}
          <section className="space-y-7 lg:max-w-[380px] ">
            <p className="text-sm opacity-50 tracking-widest font-serif translate-y-3">
              - Service
            </p>
            <h1 className="text-2xl lg:text-3xl">
              Development <br />
              service area.
            </h1>
            <p className="text-sm leading-6 opacity-70">
              From DApp through smart contract and blockchain wallet...etc. AIO
              Digital Technology offers a customized blockchain development
              service.
            </p>
            <Link to="/Service">
              <button className="text-primary  border-b-2 border-primary text-xl font-bold py-1 flex items-center gap-4 group mt-2">
                Welcome to the Service Page.
                <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
              </button>
            </Link>
          </section>
          {/* 右側區塊 */}
          <section className="space-y-9">
            <p className="text-3xl mt-3">Our Goal</p>
            <p className="text-sm leading-6 opacity-70">
              Our vision is to become one of the world's best blockchain
              development company to assist all customers expanding their own
              business or new business. Our mission is to achieve the
              expectations of our customers, continuously update technical
              capabilities, and provide the best blockchain technology with the
              most efficient agile development model.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex gap-3 items-center">
                <p className="text-5xl xl:text-6xl  text-primary font-bold">
                  1,435,000
                </p>
                <p className="font-semibold max-w-[100px]">web developers</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Service
