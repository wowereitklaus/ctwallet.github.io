import React from 'react'
import { FaBoxOpen } from 'react-icons/fa'
import { CiPen } from 'react-icons/ci'
import { MdComputer } from 'react-icons/md'
import CompanyLogo from '@/assets/222.png'

const cardsList = [
  {
    id: 1,
    title: 'product ',
    icon: <FaBoxOpen className="text-4xl" />,
  },
  {
    id: 2,
    title: 'Blockchain ',
    icon: <CiPen className="text-4xl" />,
  },
  {
    id: 3,
    title: 'Crypto ',
    icon: <MdComputer className="text-4xl" />,
  },
]

const Cards = () => {
  return (
    <div className="bg-gray">
      {/* 卡片 */}
      <div className="container py-10 text-white space-y-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
          {cardsList.map((card) => {
            return (
              <div
                key={card.id}
                className="flex items-center gap-6 bg-white/15 px-7 py-12 max-w-[300px] hover:shadow-lg hover:bg-primary/80
                hover:scale-105 duration-300"
              >
                {card.icon}
                <div className="space-y-3">
                  <p className="text-3xl">{card.title}</p>
                  <p>{card.description}</p>
                </div>
              </div>
            )
          })}
        </div>
        {/* 圖片 */}
        <div>
          <img src={CompanyLogo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Cards
