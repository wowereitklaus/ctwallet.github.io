import React, { createContext, useState, useEffect } from 'react'

// create context
export const GlobalContext = createContext()

// 模擬API傳入的公告資料
const announceList = [
  {
    id: 1,
    title: 'Introducing New Security Features and Enhancements',
    author: 'John Doe',
    content:
      'Building your own cryptocurrency exchanges, achieving your blockchain business. Professional UX/UX designer, providing the best design. Create your own cryptocurrency exchange with our customized service!',
    date: 'Jul 12, 2024',
    open: false,
    type: 'all',
    tags: ['tag1', 'tag2'],
  },
  {
    id: 2,
    title: 'Scheduled Maintenance on July 15, 2024',
    author: 'John Doe',
    content:
      'With our blockchain technology, knowledge and experience. Our blockchain developers will easily develop the blockchain wallet that can retain multi-chain and hold multi-crypto currency.',
    date: 'Jul 13, 2024',
    open: false,
    type: 'news',
    tags: ['tag1', 'tag2'],
  },
  {
    id: 3,
    title: 'Upgrade Your Wallet for Improved Performance',
    author: 'John Doe',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra facilisis velit, ac bibendum',
    date: 'Jul 14, 2024',
    open: false,
    type: 'all',
    tags: ['tag1', 'tag2'],
  },
  {
    id: 4,
    title: 'Important Notice: Phishing Alert',
    author: 'John Doe',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra facilisis velit, ac bibendum',
    date: 'Jul 15, 2024',
    open: false,
    type: 'important',
    tags: ['tag1', 'tag2'],
  },
  {
    id: 5,
    title: 'New Partnership with Blockchain Innovations Ltd.',
    author: 'John Doe',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra facilisis velit, ac bibendum',
    date: 'Jul 16, 2024',
    open: false,
    type: 'news',
    tags: ['tag1', 'tag2'],
  },
  {
    id: 6,
    title: 'Enhanced User Interface Coming Soon',
    author: 'John Doe',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra facilisis velit, ac bibendum',
    date: 'Jul 17, 2024',
    open: false,
    type: 'all',
    tags: ['tag1', 'tag2'],
  },
  {
    id: 7,
    title: 'Upcoming Webinar: Understanding Blockchain Technology',
    author: 'John Doe',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra facilisis velit, ac bibendum',
    date: 'Jul 18, 2024',
    open: false,
    type: 'news',
    tags: ['tag1', 'tag2'],
  },
]

const GlobalProvider = ({ children }) => {
  const [data, setData] = useState()
  useEffect(() => {
    setData(announceList)
    console.log('get data from API')
  }, [])
  return (
    <GlobalContext.Provider value={{ data }}>{children}</GlobalContext.Provider>
  )
}

export default GlobalProvider
