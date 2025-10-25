import React, { useEffect, useRef, useState } from 'react'
import '../style/login.css'
import Btn from '../component/Btn'
import { URL } from '../utils/url'
import { useNavigate } from 'react-router-dom'

function Login() {
const[img, setImg]=useState()
const [user, setUser]= useState()
const[login, setLogin]=useState()
   
  let yop = useRef()
  let log__email = useRef()
  let log__pass= useRef()
  let location = useNavigate()
  let reg__name =useRef()
  let reg__email =useRef()
  let reg__pass =useRef()
  let reg__date =useRef()



  useEffect(()=>{
    getUser()
    getLogin()
  }, [])
  async function getUser(){
    let fetchUser = await fetch(`${URL}/users`)
    let json1 = await fetchUser.json()
    setUser(json1.data)
    
  }
  async function handleSubmitReg(e){
    e.preventDefault()
    let reg = {
      username: reg__name.current.value,
      email: reg__email.current.value,
      password: reg__pass.current.value,
      birth_date: reg__date.current.value,

    }
    let chekUserEmail = user?.filter((item)=>item.email=== reg__email.current.value)
    if(chekUserEmail?.length ===0){
    await fetch(`${URL}/users/register`, {
        method:"POST",
        headers:{

          "Content-Type":"application/json"
          
        },
        body:JSON.stringify(reg)
      })
      location(`/admin/${chekUserEmail?._id}`)
    }else{
      alert("this email is used")
    }


  }
  async function getLogin(){
      let fetchLogin = await fetch(`${URL}/users`)
      let json2 = await fetchLogin.json()
      setLogin(json2.data)
      
  }

  



  async function handleSubmitLogin(e){
    e.preventDefault()
    if(!login){
      alert("Loading users .. please wait")
      return;
    }
    let findUserByEmail = login?.find((item)=>item.email ===log__email.current.value)
     if (findUserByEmail){
      if(findUserByEmail?.password ===log__pass.current.value){
        location(`/admin/${findUserByEmail?._id}`)
      }else{
        alert("Something is wrong with your email or password ")
        openLogin()

      }
    }else{
      alert("user not fount")
      openReg()
    }

  }
  useEffect(()=>{
    getImg()
  }, [])
  async function getImg(){
    let fetchImg = await fetch(`${URL}/headers`)
    let json3 = await fetchImg.json()
    setImg(json3.data[0])

  }
  function openLogin(){
    yop.current.classList.add('yop__right')
  }
function openReg(){
  yop.current.classList.remove('yop__right')
}















  return (
    <section  className='login' >
    















      <div className="container">
        <div className="login__all">
        <div ref={yop} className="yop" style={{backgroundImage:`url(${img?.imageLink})`}} >
        <div className="yop__wrapper">
          <div className="yop__left">
            <h4>If you don't have an account, sign up.</h4>
           <div className="left" onClick={openReg}> <Btn btn="Register"/></div>
          </div>
          <div className="yop__left">
            <h4>If you have an account, you can log in.</h4>
            <div className="right" onClick={openLogin}><Btn btn="Login"  /></div>
          </div>
        </div>
      </div>
      <div className="login__wrapper">
          <form onSubmit={(e)=>handleSubmitLogin(e)} className="login__con">
            <h4>LogIn</h4>
          <div className="input__box">
          <input ref={log__email}  type="email" />
          <label >EMAIL</label>
          
          </div>
          <div className="input__box">
          <input ref={log__pass} type="PASSWORD"  />
            <label >PASSWORD</label>
           
            </div>
            


            <Btn btn="Log In"/>
          </form>

          <form onSubmit={handleSubmitReg} className="login__con">

            <h4>Register</h4>
          <div className="input__box">
          <input ref={reg__name} type="text"  />
          <label >User Name</label>
           
          </div>
            
            <div className="input__box">
            <input ref={reg__email} type="email" />
            <label >Email</label>
           
            </div>
           <div className="input__box">
           <input ref={reg__pass} type="password"  />
           <label >Password</label>
            
           </div>
           <div className="input__box">
           <input ref={reg__date} type="date"  />
           <label >Birthday</label>
          
           </div>
            
            <Btn btn="Register"/>



          </form>
        </div>

        </div>


   

      </div>
      
    </section >
  )
}

export default Login
