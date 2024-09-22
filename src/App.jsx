import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop'
// import components
import Navbar from '@/components/Global_Components/Navbar'
import Menubar from '@/components/Global_Components/Menubar'
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
        <div className="mb-24 md:mb-32">
          <Menubar />
        </div>
        <div className="flex-1">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/NewsPage/:id" element={<NewsPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App