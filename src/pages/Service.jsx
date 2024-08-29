import React from 'react'
import bgImage from '@/assets/bg22.jpg'
import cardImage from '@/assets/project15.jpg'

const Service = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      {/* 橫幅 */}
      <div
        className="relative w-full h-[500px]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl font-bold -primary">AIO Wallet</h1>
          <p className="mt-4 text-lg max-w-lg">
            Multiple applications and projects Multi-crypto and Multi-chain​AIO
            Wallet integrates purchases, stores, exchanges, applies and related
            functions. Simple interface allows you to quickly enter the crypto
            market
          </p>
        </div>
      </div>
      {/* 卡片 */}
      <div className="flex justify-center items-center my-10">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[70%] max-w-screen-lg min-h-[600px]">
          <div className="h-[60%] bg-gray-300 flex items-center justify-center">
            <img
              src={cardImage}
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 space-y-3 h-[40%] flex flex-col justify-center">
            <h1 className="text-2xl font-bold">Vision For AIO</h1>
            <p className="text-lg">
              Become the favorite crypto wallet for all users, integrate the
              current global GameFi, and build the AIO GameFi community. With
              good DeFi ecosystem, it will assist the development of global
              decentralized finance!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
