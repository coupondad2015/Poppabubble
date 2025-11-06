import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Hero from '@/components/primaryMarquee/PrimaryMarquee'
import SecondarySlider from '@/components/secondaryMarquee/SecondarySlider'
import TertiaryMarquee from '@/components/tertiaryMarquee/TertiaryMarquee'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SecondarySlider />
      <TertiaryMarquee />
      <Footer />
    </div>
  )
}

export default page