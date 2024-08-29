import React, { useContext } from 'react'
import Hero from '@/components/Home_Components/Hero.jsx'
import Service from '@/components/Home_Components/Service.jsx'
import ServiceItems from '@/components/Home_Components/ServiceItems.jsx'
import Announce from '@/components/Home_Components/Announce.jsx'
import Testimonial from '@/components/Home_Components/Testimonial.jsx'
import DownloadBanner from '@/components/Home_Components/DownloadBanner.jsx'

import { GlobalContext } from '../contexts/GlobalContext'

const Home = () => {
  const { data } = useContext(GlobalContext)
  return (
    <main>
      <Hero />
      <Service />
      <ServiceItems />
      <Announce value={data} />
      <Testimonial />
      <DownloadBanner />
    </main>
  )
}

export default Home
