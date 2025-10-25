import React, { useEffect, useState } from 'react'
import '../style/hero.css'
import { URL } from '../utils/url'
import Btn from './Btn'
import past from '../img/arrow.svg'
function HomeHero() {
    const[hero, setHero]= useState()

    useEffect(()=>{
        getHero()
    }, [])
    async function getHero(){
        let fetchData = await fetch(`${URL}/headers`)
        let json = await fetchData.json()


        setHero(json.data[0])
    }














  return (
    <section className='hero' style={{backgroundImage:`url(${hero?.imageLink})`}}>

        <div className="container">
        <h1>{hero?.title}</h1>
        <Btn btn="Shop Collection"/>


        <img className='past' src={past } alt="" />
        </div>

      
    </section>
  )
}

export default HomeHero
