import React from 'react'
import {
  FaTelegram,
  FaInstagram,
  FaFacebook,
  FaArrowRight,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <main className="bg-gray text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3  gap-12 min-h-[600px] lg:overflow-y-hidden place-items-center py-20 md:py-0">
            {/* 圖片區 */}
            <div className="grid col-span-2 relative h-full justify-center items-center ">
              <div className="w-[280px] sm:w-[400px] md:w-[450px]">
                <h1 className="text-4xl md:text-6xl font-bold relative z-20">
                  Aio Digital <br />
                  Technology.
                </h1>
                <div className="h-[4px] w-[100px] bg-primary mt-4"></div>
                {/* 外鏈icon */}
                <div className="flex gap-6 mt-24">
                  <FaTelegram className="text-2xl hover:scale-110 cursor-pointer  duration-200" />
                  <FaInstagram className="text-2xl hover:scale-110 cursor-pointer duration-200" />
                  <FaFacebook className="text-2xl hover:scale-110 cursor-pointer duration-200" />
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
              <p className="text-sm opacity-50 tracking-widest font-serif translate-y-3">
                - About Us
              </p>
              <h1 className="text-2xl lg:text-3xl">CT Wallet.</h1>
              <p className="text-sm leading-6 opacity-70">
                Leading brand in global blockchain development
              </p>
              <Link to="/product">
                <button className="text-primary  border-b-2 border-primary text-xl font-bold py-1 flex items-center gap-4 group">
                  Learn more
                  <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero
