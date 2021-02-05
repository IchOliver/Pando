const Footer =()=>{
    return(
        <footer className="site-footer">
        <div style={{
            paddingLeft:50,
            paddingRight:50
        }}>
          <p>
            Copyright &#x000A9;&nbsp;2021 TRAQ-IT a GT Analytix Company • All
            Rights Reserved
          </p>
          <nav
            className="nav-footer"
            itemscope
            itemtype="http://schema.org/SiteNavigationElement"
            id="genesis-nav-footer"
          >
            <ul id="menu-footer-nav" className="genesis-nav-menu">
              <li
                id="menu-item-31"
                className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-31"
              >
                <a href="#" aria-current="page">Home</a>
              </li>
              <li
                id="menu-item-32"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-32"
              >
                <a href="#">Product</a>
              </li>
              <li
                id="menu-item-33"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-33"
              >
                <a href="templates/blog/index.html">Blog</a>
              </li>
              <li
                id="menu-item-35"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-35"
              >
                <a href="#">About</a>
              </li>
              <li
                id="menu-item-36"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-36"
              >
                <a href="#">Contact</a>
              </li>
              <li
                id="menu-item-814"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-814"
              >
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </nav>
          <div className="scroll-up"><a href="#" className="scrollup"></a></div>
        </div>
      </footer>
    )
}

export default Footer;