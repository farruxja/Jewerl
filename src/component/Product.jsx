import React, { useEffect, useState } from 'react'
import '../style/product.css'
import { URL } from '../utils/url'
import img from '../img/card__bag.png'
import { NavLink } from 'react-router-dom'

function Product() {
    const[data,setData]=useState(null)
   useEffect(()=> {
    getData()
   },[])
    async function getData() {
        let fetchData =await fetch(`${URL}/product-features`)
        let json =await fetchData.json()
        setData(json.data[0])
        }

     

        
        
  return (
    <section className='product'>
      <div className="container">
            <h1>{data?.title}</h1>
        <div className="product__wrapper">
            <div className="product__content">
               {data?.product_ref_id?.map((item)=>{
                   return(
                    
                    <div className='card' key={item?._id} style={{backgroundImage:`url(${img})`}}>
                  <div className="card__img">
                  <img src={item?.imageLink} alt="" />
                  </div>
             <div className="card__content">
             <h4>{item?.name}</h4>
                   <p>{item?.price}</p>
                   <NavLink to={`pdp/${item?._id}`}>New collection </NavLink>
             </div>
                 </div>
               
                   )
               })}
            </div>
            
            
            <button><NavLink to="/plp">Shop All</NavLink></button>
        </div>
      </div>
    </section>
  )
}

export default Product
