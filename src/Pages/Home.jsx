import React from 'react'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Footer from '../Components/Footer'
import MainContent from '../Components/MainContent'
// import AlertDialog from '../Components/Popup'

const Home = () => {

    return (
    <div>
        <Navbar/>
        <Slider/>
        <MainContent/>
        <Footer/>
        {/* <AlertDialog></AlertDialog> */}
    </div>
  )
}

export default Home