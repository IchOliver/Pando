import React from "react";
import './style.css'
const Header = () => {
  return (
    <div className="site-header">
      <div className="wrap">
        <div className="title-area">
          <a
            href="/"
            className="custom-logo-link"
            rel="home"
            aria-current="page"
          >
            <img
              width="160"
              height="34"
              src="https://storage.googleapis.com/pandotest/assets/images/logo.svg"
              className="custom-logo"
              alt="TRAQ-IT"
            />
          </a>
        </div>
        <button className="menu-toggle" aria-expanded="false" aria-pressed="false" role="button" id="genesis-mobile-nav-primary">Menu</button>
        {/* <nav className="nav-primary" aria-label="Main" id="genesis-nav-primary">
            <div className="wrap">
              <ul
                id="menu-primary-nav"
                className="menu genesis-nav-menu menu-primary js-superfish"
              >
                <li
                  id="menu-item-764"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-451 current_page_item menu-item-764"
                >
                  <a href="/" aria-current="page"><span>Home</span></a>
                </li>
                <li
                  id="menu-item-831"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-831"
                >
                  <a href="#"><span>Product</span></a>
                </li>
                <li
                  id="menu-item-801"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-801"
                >
                  <a href="#"><span>Blog</span></a>
                </li>
                <li
                  id="menu-item-762"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-762"
                >
                  <a href="#"><span>About</span></a>
                </li>
                <li
                  id="menu-item-763"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-763"
                >
                  <a href="#"><span>Contact</span></a>
                </li>
                <li
                  id="menu-item-338"
                  className="highlight menu-item menu-item-type-custom menu-item-object-custom menu-item-338"
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                    ><span>Client Login</span></a
                  >
                </li>
              </ul>
            </div>
          </nav> */}
        

          <nav class="nav-primary genesis-responsive-menu" aria-label="Main" id="genesis-nav-primary" style={{display: "block"}}>
            <div class="wrap">
              <ul id="menu-primary-nav" class="menu genesis-nav-menu menu-primary js-superfish" style={{touchAction:'auto'}}>
                <li id="menu-item-764" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-451 current_page_item menu-item-764">
                  <a href="index.html" aria-current="page"><span>Home</span></a>
                </li>
                <li id="menu-item-831" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-831">
                  <a href="product/index.html"><span>Product</span></a>
                </li>
                <li id="menu-item-801" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-801">
                  <a href="blog/index.html"><span>Blog</span></a>
                </li>
                <li id="menu-item-762" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-762">
                  <a href="about-us/index.html"><span>About</span></a>
                </li>
                <li id="menu-item-763" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-763">
                  <a href="contact-us/index.html"><span>Contact</span></a>
                </li>
                <li id="menu-item-338" class="highlight menu-item menu-item-type-custom menu-item-object-custom menu-item-338">
                  <a target="_blank" rel="noopener noreferrer" href="https://tqo20.traqit.com/"><span>Client Login</span></a>
                </li>
              </ul>
            </div>
          </nav>
      
      </div>
    </div>
  );
};
export default Header;
