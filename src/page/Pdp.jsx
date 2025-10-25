import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { URL } from '../utils/url'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../style/pdp.css'
import Btn from '../component/Btn';
import Editorial from '../component/Editorial';
import { useRef } from 'react';


function Pdp() {


  const[data,setData]=useState(null)
  const[son, setSon] = useState("(1)")

  useEffect(()=> {
   getData()
  },[])
   async function getData() {
       let fetchData =await fetch(`${URL}/product-features`)
       let json =await fetchData.json()
       setData(json.data[0])
       }

    let pd_id = useParams()
    let img = useRef()
    let add =useRef()
    let card = useRef()
    let content = useRef()

   
  




    const[allpro, setAllPro]= useState(null)

    useEffect(()=>{
        gatAllpro()
    }, [])


    async function gatAllpro(){
        let fetchData = await fetch(`${URL}/products`)
        let json = await fetchData.json()

        setAllPro(json.data)
    }

    function openImg(){
      img.current.classList.add('img__show')

    }
    function closeImg(){
      img.current.classList.remove('img__show')

    }




    let selectPro = allpro?.find((item)=> item._id ===pd_id.productID)
   function closeCard(){
    card.current.classList.add("closeCard")
    setSon("(0)")
    setNarx("0")
   }
   const[narx, setNarx]= useState(`${selectPro?.price}`)
   useEffect(() => {
    if (selectPro) {
      setNarx(selectPro.price); 
    }
  }, [selectPro]);
   function openAdd(){
    add.current.classList.add("add__show")
    content.current.classList.add("add__con__show")
  }
   function closeAdd(){
    add.current.classList.remove("add__show")
    content.current.classList.remove("add__con__show")
    card.current.classList.remove("closeCard")
    setSon("(1)")
    setNarx(selectPro?.price || 0);

   }
   




  return (
    <main className='pdp'>
      <div className="img__modal" ref={img}>


        <div className="img_close" onClick={closeImg}>
          X
        </div>
        <img src={selectPro?.imageLink} alt="" />
        

      </div>


      <div className="add__card" ref={add}>

        
       
      </div>
      <div className="add__content" ref={content}>
       <div className="closeAdd" onClick={closeAdd}>X</div>
       <h2>Your Cart</h2>
        <h5 >{son}</h5>
        <div className="add__card__" ref={card}>
          <img src={selectPro?.imageLink} alt="" />
          <div className="add__con">
            <h4>{selectPro?.name}</h4>
            <h6>${selectPro?.price}</h6>
            <select >
              <option >
              Size 9
              </option>
            </select>
            <span onClick={closeCard}>Remove</span>
          </div>
        </div>



        <div className="card__bottom">

          <h4>SUBTOTAL ${narx}</h4>
          <p>Shipping and taxes calculated next</p>
          <Btn btn="Checkout"/>
        </div>




       </div>































        <section className="pdp__hero">
            <div className="container">
                <div className="pdp_hero_wrap">
                    <div className="pdp__right">
                      
                        <Swiper
        direction={'vertical'}
        slidesPerView={2}
        pagination={{
          clickable: true,
        }}
         loop={true}
        className="mySwiper ver"
      >
        <SwiperSlide className='ver__slid'><img src={selectPro?.imageLink} alt="" /></SwiperSlide>
        <SwiperSlide className='ver__slid'><img src={selectPro?.imageLink} alt="" /></SwiperSlide>
        <SwiperSlide className='ver__slid'><img src={selectPro?.imageLink} alt="" /></SwiperSlide>
        
       
      </Swiper>
                        <Swiper
        direction={'vertical'}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
         loop={true}
        className="mySwiper sec"

        
      >
        <SwiperSlide onClick={openImg} className='ver__slid'><img src={selectPro?.imageLink} alt="" /></SwiperSlide>
        <SwiperSlide onClick={openImg} className='ver__slid'><img src={selectPro?.imageLink} alt="" /></SwiperSlide>
        
        
       
      </Swiper>
                        


                    </div>


                    <div className="pdp__right__true">
                      <span>{selectPro?.cat_ref_id[0]?.cat_name}</span>
                      <h2>{selectPro?.name}</h2>
                      <h4>${selectPro?.price}</h4>
                      <select >
                        <option >
                        Select Size
                        </option>
                      </select>
                      

                      <div className="burrrr" onClick={openAdd}> 
                      <Btn btn="Add to cart"  />
                      </div>

                      <h5 className='sar'>Description</h5>
                      <p className='par'>{selectPro?.description}</p>
                      <h5 className='sar'>Details</h5>
                      <p className='par'>{selectPro?.details}</p>
                      <h5 className='sar'>Shipping</h5>
                      <p className='par'>{selectPro?.shipping}</p>

                    </div>
                </div>
            </div>
        </section>

        <Editorial/>


        <section className='product'>
      <div className="container">
            <h1>{data?.title}</h1>
        <div className="product__wrapper">
            <div className="product__content">
               {data?.product_ref_id?.map((item)=>{
                   return(
                    <div className='card' key={item?._id} >
                    <div className="card__img">
                    <img src={item?.imageLink} alt="" />
                    </div>
               <div className="card__content">
               <h4>{item?.name}</h4>
                     <p>{item?.price}</p>
                     <a>New collection</a>
               </div>
                   </div>
                   )
               })}
            </div>
            
            
           
        </div>
      </div>
    </section>
      
    </main>
  )
}

export default Pdp
