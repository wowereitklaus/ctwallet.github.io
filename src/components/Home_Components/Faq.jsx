import React from 'react'
import { IoRemoveOutline } from 'react-icons/io5'
import { IoAddOutline } from 'react-icons/io5'

const question = [
  {
    id: 1,
    question: 'What is the difference between Bitcoin and Ethereum?',
    answer:
      'Bitcoin is a cryptocurrency developed by Bitcoin Core developers, while Ethereum is a platform for decentralized applications built on blockchain technology.',
    open: false,
  },
  {
    id: 2,
    question: 'How does Bitcoin work?',
    answer:
      'Bitcoin uses Proof-of-Work (PoW) consensus algorithm to validate transactions and maintain a decentralized network.',
    open: false,
  },
  {
    id: 3,
    question: 'What is the current market value of Bitcoin?',
    answer:
      'Bitcoin has a market value of approximately $21,326.86, according to CoinGecko.',
    open: false,
  },
]

const Faq = () => {
  const [items, setItems] = React.useState(question)
  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, open: !item.open } : item
      )
    )
  }
  return (
    <div
      id="FAQS"
      className="w-full lg:py-32 py-8 lg:px-8 px-5 flex flex-col gap-10 items-center justify-center"
    >
      <span className="text-primary text-[72px]">FAQs Section</span>
      <div className="flex flex-col gap-3 w-fit ">
        {items.map((item) => (
          <div className="w-full pb-3 border-b " key={item.id}>
            <div
              className="flex items-center justify-between w-full lg:gap-[250px] cursor-pointer"
              onClick={() => toggleItem(item.id)}
            >
              <span className="text-[25px] text-black">{item.question}</span>
              {item.open ? (
                <IoRemoveOutline
                  cssClasses={'cursor-pointer !text-primary !fill-primary'}
                />
              ) : (
                <IoAddOutline
                  cssClasses={'cursor-pointer !text-primary !fill-primary'}
                />
              )}
            </div>
            {item.open && (
              <div className="text-lg text-black mt-2">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq
