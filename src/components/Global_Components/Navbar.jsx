import React, { useState, useEffect, useRef } from 'react'
import Logo from '@/assets/logo.png'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'
import { motion } from 'framer-motion'

const NavMenu = [
  { id: 1, title: 'Service', link: '/Service', delay: 0.2 },
  { id: 2, title: 'Privacy Policy', link: '/PrivacyPolicy', delay: 0.4 },
  { id: 3, title: 'Product', link: '/Product', delay: 0.6 },
]

const container = (delay) => ({
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: delay,
    },
  },
})

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef(null)

  // 點擊頁面其他地方時關閉選單
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="bg-gray text-white  left-0 right-0  z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div>
          <Link to="/" className="block">
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              src={Logo}
              alt="Logo"
              className="w-24 md:w-32"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center">
          <ul className="flex gap-10">
            {NavMenu.map((item) => (
              <motion.li
                variants={container(item.delay)}
                initial="hidden"
                whileInView="show"
                key={item.id}
              >
                <Link
                  to={item.link}
                  className="hover:text-primary text-xl font-semibold duration-300"
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        {/* 漢堡選單 */}
        <div className="block md:hidden relative " ref={menuRef}>
          {showMenu ? (
            <MdOutlineClose size={45} onClick={toggleMenu} />
          ) : (
            <GiHamburgerMenu size={45} onClick={toggleMenu} />
          )}
          <div
            className={`
          ${
            showMenu ? 'translate-x-0' : '-translate-x-full'
          } fixed top-24 left-0 right-0 bg-gray-800 shadow-md rounded-b-xl z-50 py-4 bg-gray h-[30%] transition-transform duration-500`}
          >
            {showMenu && (
              <ul className="flex flex-col items-center gap-4">
                {NavMenu.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.link}
                      className="text-2xl text-gray-300  hover:text-primary duration-300"
                      onClick={() => setShowMenu(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
