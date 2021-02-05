const BestBlock =()=>{
 
    return(
        <div className="secondary-block">
        <div className="container-large">
          <div className="flex-holder flex-holder-cus">
            <div
              className="image-holder aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <img src="https://traqit.com/wp-content/uploads/2018/08/graphics.jpg" alt="" />
            </div>
            <div
              className="description aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <h3>
                The <strong>Best People</strong>, The
                <strong>Best Products</strong>, Providing The
                <strong>Best Customer Experience</strong>
              </h3>
              <p>
                Innovative solutions and the highest level of support to
                our tradeshow and event clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BestBlock;