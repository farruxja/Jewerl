import React, { useEffect, useState } from 'react'
import '../style/cards.css'
import { URL } from '../utils/url'
import { NavLink } from 'react-router-dom'
import Btn from './Btn'
import img1 from '../img/img__1.png'
import img2 from '../img/img__2.png'

function Cards() {


    const[card, setCard] = useState()
    useEffect(()=>{
        getCard()
    }, [])
    async function getCard(){
        let fetchData = await fetch(`${URL}/products`)
        let json = await fetchData.json()
        setCard(json.data)
    }
  return (
    <section className='cards'>
        <div className="container">
            <div className="cards__wrap__top">
                <div className="c__left">
                    <h5>Sort by</h5>
                    <select >
                        <option value="">Select</option>
                    </select>
                </div>
                <div className="c__left">
                    <h5>Collections</h5>
                    <select >
                        <option value="">Select</option>
                    </select>
                </div>
            </div>





            <div className="cards__grid">
                <div className="wrap__1 fles">
                    <img src={img1} alt="" />
                    <div className="wrap__con">
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing.</h4>
                        <Btn btn="CTA button"/>

                    </div>
                </div>
                <div className="wrap__2 fles">
                    <img src={img2} alt="" />
                    <div className="wrap__con">
                        <h4>Condimentum cum lectus commodo nunc eu aliquam. Tristique vulputate at consequat.</h4>
                        <Btn btn="CTA button"/>

                    </div>
                </div>


                {card?.map?.((item)=>{
                  return(
                    <NavLink to={`/pdp/${item?._id}`}>
                      <div className="g__card" key={item?._id} style={{backgroundImage:`url(${item?.imageLink})`}}>
                        
                        <h4>{item?.name}</h4>
                        <span>${item?.price}</span>

                        <p>New collection</p>
                        </div>
                  </NavLink>
                  )
                })}

            </div>
        </div>
      
    </section>
  )
}

export default Cards
