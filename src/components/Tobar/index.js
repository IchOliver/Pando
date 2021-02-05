import React from "react";
import './style.css'
const Tobar = () => {
  return (
    <div className="site-topbar">
      <div className="wrap">
        <ul>
          <li>
            <a href="tel:9134981221">
              <i className="fa fa-phone"></i> 913.498.1221
            </a>
          </li>
          <li>
            <a href="mailto:info@traqit.com">
              <i className="fa fa-envelope-o"></i> info@traqit.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tobar;
