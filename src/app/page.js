import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Hero from '@/components/primaryMarquee/PrimaryMarquee'
import SecondaryMarquee from '@/components/secondaryMarquee/SecondaryMarquee'
import TertiaryMarquee from '@/components/tertiaryMarquee/TertiaryMarquee'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SecondaryMarquee />
      <TertiaryMarquee />
      <Footer />
    </div>
  )
}

export default page