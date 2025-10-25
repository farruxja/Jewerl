import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import qora from '../img/qora.svg'
import logo from '../img/insta__logo.svg'
import '../style/footer.css'

function Footer() {
  let page = useLocation()
  return (
    <footer  className={`"footer" ${page.pathname==="/login" ? "dic__no": ""}`}>
      <div className="container">
        <div className="footer__wrapper">
          <div className="foot__left">
           <div className="f__left__con">
           <NavLink to="/plp">Shop all</NavLink>
            <li>Rings</li>
            <li>Bracelets</li>
            <li>Earrings</li>
            <li>Necklaces</li>
           </div>
           
          </div>
          <div className="foot__wrap">
            <div className="foot__mid">
              <img src={qora} alt="" />
              <div className="mid__bot">
                <p>1234 Placeholder St. New York, NY
Privacy Policy
© 2022 D.Gregory</p>
              </div>
            </div>

            <div className="foot__right">
              <div className="right__con">
              <li>ARCHive</li>
              <li>ABout</li>
              <li>Contact</li>
              <img src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
