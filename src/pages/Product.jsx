import React from 'react'
import { GrSecure } from 'react-icons/gr'
import phoneIMG from '@/assets/project8.png'
import ctIMG from '@/assets/ctIMG.png'
import bannerImg from '@/assets/coffee-cover.jpg'
import AppStoreImg from '@/assets/app_store.png'
import PlayStoreImg from '@/assets/play_store.png'
import { motion } from 'framer-motion'

const BannerStyle = {
  backgroundImage: `url(${bannerImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
}

const Product = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* 橫幅 */}
        <div className="bg-slate-200 py-6 px-8 flex flex-col sm:flex-row items-center rounded-lg mb-10">
          <div className="sm:w-1/2 sm:flex justify-center mb-2">
            {/* 手機截圖 */}
            <img
              src={phoneIMG}
              alt="Mobile screenshot"
              className=" h-[300px] sm:h-[400px]"
            />
          </div>
          <div className="sm:w-1/2 ml-6 ">
            <h2 className="text-xl font-bold mb-2 sm:text-3xl">
              Control your future wealth with CT Wallet!
            </h2>
            <p className="sm:text-xl text-gray-700 mb-4">
              A secure, convenient, and limitless cryptocurrency wallet.
            </p>
            <button className="bg-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-primary-dark transition duration-300">
              Download
            </button>
          </div>
        </div>
        {/* 產品特色區塊 */}
        <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* 圖片 */}
            <div>
              <img
                src={ctIMG}
                alt=""
                className="w-full max-w-[430px] mx-auto spin"
              />
            </div>
            {/* 文字 */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 className="text-3xl sm:text-4xl">
                CT Wallet Product Features
              </h1>
              <p className="text-sm text-gray-500 tracking-wide leading-5">
                Introducing the most advanced cryptocurrency wallet technology
                for the fast-paced digital currency world. CT Wallet, your
                trusted choice.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <GrSecure className="text-3xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />{' '}
                    <span className="text-lg font-bold">Secure</span>{' '}
                  </div>
                  <div className="flex items-center gap-3">
                    <GrSecure className="text-3xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />{' '}
                    <span className="text-lg font-bold">Fast</span>{' '}
                  </div>
                  <div className="flex items-center gap-3">
                    <GrSecure className="text-3xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />{' '}
                    <span className="text-lg font-bold">Reliable</span>{' '}
                  </div>
                </div>

                <div className="border-l-4 border-primary/50 pl-6 space-y-3">
                  <h1 className="text-2xl font-semibold">Easy to Use</h1>
                  <p className="text-gray-500 text-sm">
                    Our wallet combines fast, secure, and reliable features to
                    provide optimal protection and management for your digital
                    assets. Whether you're a novice or experienced investor, we
                    are committed to simplifying your user experience, enabling
                    you to effortlessly manage and exchange multiple
                    cryptocurrencies. Join our cryptocurrency wallet family
                    today and experience a faster, safer, and more reliable
                    digital asset management solution. Feel CT Wallet, where
                    security is guaranteed and at your fingertips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 下載 */}
        <div className="  py-12">
          <div className="container ">
            <div
              style={BannerStyle}
              className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
            >
              <div>
                <div className="space-y-6 max-w-xl mx-auto">
                  <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 100,
                      damping: 10,
                      delay: 0.2,
                    }}
                    className="text-2xl text-center sm:text-4xl font-semibold"
                  >
                    Download the app
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 100,
                      damping: 10,
                      delay: 0.3,
                    }}
                    className="text-center sm:px-20"
                  >
                    Get your hands on the easiest-to-use cryptocurrency wallet
                    right away.
                  </motion.p>
                  {/* 雙平台logo */}
                  <div className="flex justify-center items-center gap-4">
                    <a
                      href="https://apps.apple.com/tw/app/ct-wallet/id6482976355"
                      target="_blank"
                      rel="noopener noreferrer"
                      // 加上noopener noreferrer增加另開分頁的安全性
                      className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    >
                      <motion.img
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 100,
                          damping: 10,
                          delay: 0.4,
                        }}
                        src={AppStoreImg}
                        alt=""
                      />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.aio.city_wallet"
                      className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    >
                      <motion.img
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 100,
                          damping: 10,
                          delay: 0.5,
                        }}
                        src={PlayStoreImg}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
