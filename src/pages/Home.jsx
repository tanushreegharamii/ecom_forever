import React from 'react'
import HeroSec from '../components/HeroSec'
import LatestCollections from '../components/LatestCollections'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
const Home = () => {
  return (
    <div>
      <HeroSec/>
      <LatestCollections/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
