import React, { useEffect, useState } from 'react'
import { URL } from '../utils/url'
import Btn from './Btn'
import '../style/editorial.css'

function Editorial() {


    const[edit, setEdit] = useState()


    useEffect(()=>{
        getEdit()
    }, [])
    async function getEdit(){
        let fetchData = await fetch(`${URL}/editorial`)
        let json = await fetchData.json()
        setEdit(json.data[0])
        
    }
  return (
    <section className='edit'>
        <div className="container">
            <div className="edit__bor">
                <div className="top__left">

                </div>
                <div className="top__right"></div>
                <div className="edit__wrap">
                    <img src={edit?.imageLink} alt="" />
                    <div className="edit__con">
                        <h4>{edit?.title}</h4>
                        <p>{edit?.description}</p>



                        <Btn btn="Shop the collection"/>
                    </div>


                   
                </div>
                <div className="bot__left">

                </div>
                <div className="bot__right">
                    
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Editorial
