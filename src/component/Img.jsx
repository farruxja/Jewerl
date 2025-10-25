import React, { useEffect, useState } from 'react'
import { URL } from '../utils/url'

function Img() {
    let [img, setImg]=useState()
    useEffect(()=>{
        getImg()
    }, [])
    async function getImg(){
        let fetchData = await fetch(`${URL}/bgImage`)
        let json = await fetchData.json()
        setImg(json.data[0])

    }

  return (
    <section className='img'>
      <div className="container">
      <img src={img?.imageLink} alt="" />
      </div>
      
    </section>
  )
}

export default Img
