import React from 'react'
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

const DownloadBanner = () => {
  return (
    <div className="bg-darkGray  py-12">
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
                Get your hands on the easiest-to-use cryptocurrency wallet right
                away.
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
  )
}

export default DownloadBanner
