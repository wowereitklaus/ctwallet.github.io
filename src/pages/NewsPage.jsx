// src/pages/NewsPage.jsx
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext'

const NewsPage = () => {
  const { id } = useParams()
  const { data } = useContext(GlobalContext) // 從 Context 中取得公告資料
  console.log(data, id)
  const news = data?.find((item) => item.id === parseInt(id))

  if (!news) {
    return <div className="bg-gray-100 min-h-screen py-10">News not found</div>
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="bg-slate-200 py-6 px-8 flex flex-col sm:flex-row items-center rounded-lg mb-10">
          <div className="sm:w-full ml-6 ">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4">
              {news.title}
            </h1>
            <p className="text-sm sm:text-lg text-gray-700 mb-2">
              Author: {news.author}
            </p>
            <p className="text-sm sm:text-lg text-gray-700 mb-4">
              Publication date: {news.date}
            </p>
          </div>
        </div>

        <div className="bg-white py-6 px-8 rounded-lg shadow-md mb-10">
          <p className="text-gray-700 text-lg leading-relaxed">
            {news.content}
          </p>
        </div>

        <div className="bg-slate-200 py-6 px-8 rounded-lg shadow-md mb-10 flex flex-col sm:flex-row">
          <div className="mb-4 sm:mb-0 sm:mr-6">
            <h2 className="text-xl font-bold">Tags</h2>
            <div className="flex flex-wrap mt-2">
              {news.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-blue-200 text-blue-800 text-sm px-3 py-1 rounded-full mr-2 mb-2"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold">Type</h2>
            <div className="flex flex-wrap mt-2">
              <span className="inline-block bg-green-200 text-green-800 text-sm px-3 py-1 rounded-full mr-2 mb-2">
                {news.type}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsPage
