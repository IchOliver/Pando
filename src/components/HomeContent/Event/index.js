import React from 'react'

const Event=()=>{

     return(
        <div className="primary-block">
        <div className="wrap">
          <div className="flex-holder clearfix flex-cus">
            <div
              className="video-holder aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div className="resp-container">
                <p>
                  <iframe
                    src="https://www.youtube.com/embed/yZi7A_PjRww?rel=0&amp;showinfo=0"
                    width="560"
                    height="315"
                    frameBorder="0"
                    allowFullScreen="allowfullscreen"
                  ></iframe>
                </p>
              </div>
            </div>
            <div
              className="description aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="300"
            >
              <h3>
                Seamless orchestration of
                <strong>Meetings and Events</strong>
              </h3>
              <p>
                TRAQ-IT helps meeting planners; coordinate, collaborate
                and communicate internal and external events. We can help
                you “bring order to chaos!”
              </p>
            </div>
          </div>
        </div>
      </div>
     )
}

export default Event