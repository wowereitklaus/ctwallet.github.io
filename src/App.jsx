import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop' // 引入跳頁時回到頂部的 Hook
// import components
import Navbar from '@/components/Global_Components/Navbar'
import Footer from '@/components/Global_Components/Footer'

// import pages
import Home from '@/pages/Home'
import Product from '@/pages/Product.jsx'
import PrivacyPolicy from '@/pages/PrivacyPolicy.jsx'
import Service from '@/pages/Service.jsx'
import NewsPage from './pages/NewsPage.jsx'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Product" element={<Product />} />
            <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route exact path="/Service" element={<Service />} />
            <Route exact path="/NewsPage/:id" element={<NewsPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
