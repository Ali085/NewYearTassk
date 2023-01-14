import React from 'react'
import HomeMain from '../../Components/HomeMain'
import HomeSection from '../../Components/HomeSection'
import Footer from '../../Layouts/Footer/inedx'
import Navbar from '../../Layouts/Navbar/inedx'
import '../../reset.scss'
import './index.scss'

function Home() {
  return (
    <>
    <Navbar/>
    <HomeSection/>
    <HomeMain/>
    <Footer/>
    </>
  )
}

export default Home