import React from 'react'
import hero from '../img/plp__hero.png'
import '../style/plphero.css'
import Btn from './Btn'

function PlpHero() {
  return (
    <section className='plp__hero' >
        <div className="container">
            <img src={hero} alt="" />

            <div className="p_hero_wrap">
                <Btn btn="All"/>
                <Btn btn="Rings"/>
                <Btn btn="Bracelets"/>
                <Btn btn="Earrings"/>
                <Btn btn="Necklaces"/>
            </div>
        </div>
      
    </section >
  )
}

export default PlpHero
