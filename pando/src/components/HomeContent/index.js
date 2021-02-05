import React from 'react'
import BestBlock from './BestBlock/BestBlock'
import Block from './Block'
import Event from './Event'
import Feedback from './Feedback'
import HomeBanner from './HomeBanner'
import './style.css'

const HomeContent =()=>{
   
    return(
        <div className="">
       
              <HomeBanner/>
              <Block/>
              <Event/>
              <BestBlock/>
              <Feedback/>
        </div>
    )
}

export default HomeContent;