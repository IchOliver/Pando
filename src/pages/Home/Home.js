import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HomeContent from '../../components/HomeContent'
import Tobar from '../../components/Tobar'


const Home =()=>{

    return(
        <div>
          <Tobar/>
          <Header/>
          <HomeContent/>
          <Footer/>
        </div>
    )

}

export default Home;