import React, { useState, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowDown } from 'react-icons/fa6'
import { FaArrowUp } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

// All、News分類的切換
const Tabs = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="flex space-x-4 mb-4">
      <button
        className={`px-4 py-2 ${
          selectedTab === 'all' ? 'border-b-2 border-primary' : ''
        }`}
        onClick={() => setSelectedTab('all')}
      >
        All
      </button>
      <button
        className={`px-4 py-2 ${
          selectedTab === 'news' ? 'border-b-2 border-primary' : ''
        }`}
        onClick={() => setSelectedTab('news')}
      >
        News
      </button>
    </div>
  )
}

// 分頁組件
const Pagination = ({ currentPage, totalPages, setPage }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        className="px-4 py-2 mx-1 bg-gray-700 text-white rounded disabled:opacity-50"
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === index + 1
              ? 'bg-primary text-white'
              : 'bg-gray-700 text-white'
          }`}
          onClick={() => setPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="px-4 py-2 mx-1 bg-gray-700 text-white rounded disabled:opacity-50"
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  )
}

// 布告欄組件
const Announce = ({ value = [] }) => {
  const navigate = useNavigate()
  const [announceList, setAnnounceList] = useState([]) // 布告欄資料
  useEffect(() => {
    setAnnounceList(value)
  }, [value]) // 傳入的布告欄資料變動時重新賦予
  const [selectedTab, setSelectedTab] = useState('all') // 預設是選擇All類別
  const [currentPage, setCurrentPage] = useState(1) // 起始頁數
  const itemsPerPage = 4 //每個頁顯示四筆

  // 布告欄點擊將該筆資料展開
  const toggleItem = (id) => {
    setAnnounceList(
      announceList.map((item) =>
        item.id === id ? { ...item, open: !item.open } : item
      )
    )
  }

  // selectedTab是all就使用全部資料否則將新聞過濾出來賦予給filteredAnnounce渲染列表
  const filteredAnnounce =
    selectedTab === 'all'
      ? announceList
      : announceList.filter((announce) => announce.type === 'news')

  // 總筆數除每頁顯示取得總頁數
  const totalPages = Math.ceil(filteredAnnounce.length / itemsPerPage)
  // 計算得到每頁要顯示的資料
  const paginatedAnnounce = filteredAnnounce.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  // 若tab異動就將當前頁數重置為1
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedTab])

  return (
    <div className="bg-darkGray text-white py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 20,
              damping: 10,
              delay: 0.2,
            }}
            className="space-y-7 lg:max-w-[380px]"
          >
            <p className="text-sm opacity-50 tracking-widest font-serif translate-y-3">
              - Announce
            </p>
            <h1 className="text-2xl lg:text-3xl">Latest Announcements</h1>
            <p className="text-sm leading-6 opacity-70">
              Explore our latest features and updates
            </p>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 20,
              damping: 10,
              delay: 0.4,
            }}
            className="col-span-2 lg:px-20"
          >
            <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <div className="space-y-8 transition-all duration-500 min-h-[280px]">
              {paginatedAnnounce.map((item) => {
                const isContentTruncated = item.content.length > 150
                return (
                  <div key={item.id} className="border-b-2 border-gray pb-4">
                    <div
                      className="flex justify-between items-center group hover:cursor-pointer "
                      onClick={() => toggleItem(item.id)}
                    >
                      <p className="text-sm opacity-75 w-14 sm:w-auto">
                        {item.date}
                      </p>
                      <p className="text-lg font-bold  max-w-[250px]  sm:max-w-[400px] md:max-w-[300px] truncate xl:max-w-[400px] 2xl:max-w-[550px] flex-grow">
                        {item.title}
                      </p>
                      {/* 箭頭圖標 */}
                      {item.open != true ? (
                        <FaArrowDown className="text-xl text-primary group-hover:translate-y-2 transition duration-200" />
                      ) : (
                        <FaArrowUp className="text-xl text-primary group-hover:-translate-y-2 transition duration-200" />
                      )}
                    </div>
                    {/* 展開的內容 */}
                    {item.open && (
                      <div className="text-sm mt-2 text-primary transition-all duration-500 ease-in-out">
                        <div className="line-clamp-3">
                          {isContentTruncated
                            ? item.content.slice(0, 150) + '...'
                            : item.content}
                        </div>
                        {/* 只有當內容超過設定長度時顯示 '查看更多' 按鈕 */}
                        {isContentTruncated && (
                          <div className="w-full flex justify-end">
                            <button
                              className="text-blue-500 ml-2 hover:scale-105"
                              onClick={() => {
                                navigate(`/NewsPage/${item.id}`)
                              }}
                            >
                              Learn more
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setPage={setCurrentPage}
            />
          </motion.section>
        </div>
      </div>
    </div>
  )
}

export default Announce
