import React from 'react'
import BannerImage from '../../../assets/images/banner-image.jpg'
const HomeBanner =()=>{
   
    return(
        <div className="home-banner home-banner aos-init aos-animate"
         style={{backgroundImage: `url(${BannerImage})` }}
         data-aos="fade-up"
        >
            <div class="wrap">

              <h1 data-aos="fade-up" data-aos-duration="500" className="aos-init aos-animate">
                 Debt Brokering,Modernized
                </h1>
                <div
                  class="content-holder aos-init aos-animate content-holder-sub"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                 <p>
                 Pando is a leading, data-driven, AI-based commercial real estate capital broker, optimizing 
                 <br/>
                 capital providers' deal flow while minimizing commercial real estate financing costs.
                  </p>
               
                </div>
            </div>
            <div className="ul-content">
             <ul class="data-list cus-list">
                    <li class="data-item cus-item">
                      
                        <span class="item-value">4</span>
                         <span class="item-caption">continents with a lender presence</span>
                      
                     
                    </li>
                    <li class="data-item cus-item">
                      <span class="item-value">50</span>
                      <span class="item-caption">states with lender access</span>
                    </li>
                    <li class="data-item cus-item">
                      <span class="item-value">$150M</span>
                      <span class="item-caption">in loans originated</span>
                    </li>
                    <li class="data-item cus-item">
                      <span class="item-value">50</span>
                      <span class="item-caption">minutes for a loan application</span>
                    </li>
                  </ul>
                  <a className="button" href="#" target="_self">Request a Free Trial</a>

            </div>
         
        </div>
    )
}

export default HomeBanner;