// src/pages/NewsPage.jsx
import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext'

const NewsPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data } = useContext(GlobalContext) // 從 Context 中取得公告資料
  console.log(data, id)
  const news = data?.find((item) => item.id === parseInt(id))
  const recentNews = data
    ?.filter((item) => item.id !== parseInt(id))
    .slice(0, 4)

  if (!news) {
    return <div className="bg-gray-100 min-h-screen py-10">News not found</div>
  }

  return (
    <div className="bg-gray min-h-screen py-2 text-white">
      <div className="container mx-auto px-8 flex flex-col lg:flex-row">
        <div className="lg:w-3/4 bg-gray-100 p-6 rounded-lg mb-10 lg:mb-0 lg:mr-4">
          <h1 className="text-3xl font-bold mb-2 text-center">{news.title}</h1>
          <p className="text-gray-700 text-sm mb-2 text-center text-primary">
            {news.date}
          </p>
          <img src={news.img} alt="" className="w-full mb-4 mt-4 rounded-md" />
          <p className="text-gray-700 text-lg leading-relaxed mb-4 ">
            {news.content}
          </p>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h2 className="text-lg font-bold mb-2 text-primary">Tags</h2>
              <div className="flex flex-wrap">
                {news.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-primary text-blue-800 text-sm px-3 py-1 rounded-full mr-2 mb-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-8">NEWS</h2>
          {recentNews.map((item) => (
            <div
              key={item.id}
              className="mb-4 hover:scale-105 cursor-pointer transition-transform duration-300"
              onClick={() => {
                navigate(`/NewsPage/${item.id}`)
              }}
            >
              <img src={item.img} alt="" className="w-full mb-2 rounded-md" />
              <h3 className="text-sm font-bold">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsPage
