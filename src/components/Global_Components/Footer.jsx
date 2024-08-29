import React from 'react'
import Logo from '@/assets/logo.png'

const Footer = () => {
  return (
    <div className="bg-darkGray py-10">
      <div className="container flex flex-col gap-3 justify-center items-center">
        <img src={Logo} alt="" className="w-[100px]" />
        <p className="text-white text-center text-sm">
          © 2024 AIO Digital Technology .
        </p>
        <p className="text-white">
          support：{'     '}
          <a href="https://www.youtube.com/" className="text-primary">
            wowereitklaus2023@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
