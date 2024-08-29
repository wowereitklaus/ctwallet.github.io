import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import Logo from '@/assets/logo.png'
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

const Menubar = () => {
  const [menu, setMenu] = useState(false)

  const menuRef = useRef(null)

  // 點擊頁面其他地方時關閉選單
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <div className="fixed w-full z-10">
      <div>
        <div className="flex flex-row justify-between md:px-32 px-5 bg-gray text-white">
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
          <nav className="hidden lg:flex flex-row items-center  gap-8">
            {NavMenu.map((item) => (
              <motion.div
                variants={container(item.delay)}
                initial="hidden"
                whileInView="show"
                key={item.id}
              >
                <Link
                  to={item.link}
                  className="hover:text-primary text-2xl font-semibold duration-300"
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose
                className="cursor-pointer"
                size={45}
                onClick={toggleMenu}
              />
            ) : (
              <HiOutlineMenuAlt1
                className="cursor-pointer"
                size={45}
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        <div
          ref={menuRef}
          className={`${
            menu ? 'translate-x-0' : '-translate-x-full'
          } lg:hidden flex flex-col absolute bg-gray text-white left-0 font-semibold text-2xl text-center z-100 pt-8 pb-4 gap-8 w-full transition-transform duration-500 shadow-md rounded-b-xl`}
        >
          {menu && (
            <ul className="flex flex-col items-center gap-4">
              {NavMenu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className="text-2xl text-gray-300 hover:text-primary duration-300"
                    onClick={() => setMenu(false)}
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
  )
}

export default Menubar
