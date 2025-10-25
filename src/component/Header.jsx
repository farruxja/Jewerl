import React, { useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import img from '../img/logo.png'
import logo2 from '../img/qora.svg'
import '../style/header.css'

function Header() {


  

    
    let modal = useRef()
    let page = useLocation()


    function openModal(){
        modal.current.classList.add("op")

    }
    function closeModal(){
        modal.current.classList.remove("op")

    }
  return (
<header  className={page.pathname==="/login"? "login__none": "header"}>

        <div ref={modal} className="modal">
             <div className="cl" onClick={closeModal}>
                <h1>X</h1>
             </div>
            <div className="modal__content">

            <li><NavLink to="/plp">SHOP</NavLink></li>
          <li>ABOUT</li>
          <li>Contact</li>
          <li>Archive</li>
       
                

            </div>

        </div>

        <div className="container">
          
















        <div className="head__top">
            <h5>Promo banner placeholder text</h5>

        </div>
        <div className="m__w">
                <div className="m__wrapper">
                    <div className="bur" onClick={openModal}>
                        <div className="ch"></div>
                        <div className="ch"></div>
                        <div className="ch"></div>
                    </div>
                    <NavLink to="/"><img src={img} alt="" /></NavLink>
                    <div className="peop"><NavLink to="/login"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8zZPeeTmxL0igstxnHow4rHo6h6ojixgi2w&s" alt="" /></NavLink></div>
                </div>
            </div>
        <div  className={`"header" ${page.pathname==="/" ? "": "header__qora"}`}>
        <div  className={`"header__wrapper" ${page.pathname==="/" ? "header__wrapper": "h__bot"}`}>
        <ul>
        <li><NavLink to="/plp">SHOP</NavLink></li>
          <li>ABOUT</li>
          <li>Contact</li>
          <li>Archive</li>
        </ul>
        <div className="header_img">
          <NavLink to="/"><img src={page.pathname==="/" ? img: logo2} alt="" /></NavLink>
        </div>
        <ul className='grid2'>
          <li>Search</li>
          <li>Account</li>
          <li>Cart (0)</li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/login">Register</NavLink></li>
         
          

        </ul>
      </div>
        </div>
        </div>
      
    </header>
  )
}

export default Header
