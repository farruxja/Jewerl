import React, { useEffect, useState } from 'react'
import Btn from './Btn'
import { URL } from '../utils/url'
import '../style/email.css'

function Email() {
    const[emaol, setEmail] = useState()



    useEffect(()=>{
        getEmail()
    }, [])
    async function getEmail(){
        let fetchData = await fetch(`${URL}/editoril`)
        let json = await fetchData.json()


        setEmail(json.data[0])
    }
  














  return (
    <section className='email' style={{backgroundImage:`url(${emaol?.imageLink})`}}>
        <div className="container">
            <div className="email__con">
                <h4>{emaol?.description}</h4>
                <input type="text"  placeholder='Enter your Email'/>
               
            </div>
            <Btn btn="Sign up"/>
        </div>
      
    </section>
  )
}

export default Email
