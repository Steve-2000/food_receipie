import { useState,useEffect } from 'react'
import Model from './Model'
import Loginform from './loginform';
// import React from 'react'
import { Link } from 'react-router-dom'
// import { Signup } from '../../backend/controller/user';
import './mainnav.css'

const Mainnav= () => {
  let token = localStorage.getItem("token");


  const [isOpen, SetIsOpen] = useState(false);
  const [isLogin, SetIsLogin] = useState(token?false:true);

  useEffect(()=>{
    SetIsLogin(token?false:true);

  },[token])

  const logbutton = () => {
    if(token){
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      SetIsLogin(true);
    }else{
      SetIsOpen(true);
    }

   
    

  };

  return (
    <div>
      <header className="Header">
  <h2>food blog</h2>
  <ul>
    <li><Link to="/">home</Link></li>
    <li onClick={() => isLogin && SetIsOpen(true)}>
      <Link to={!isLogin ? "/receipies" : "/"}>receipies</Link>
    </li>
    <li onClick={() => isLogin && SetIsOpen(true)}>
      <Link to={!isLogin ? "/favourites" : "/"}>favourites</Link>
    </li>
    <li onClick={logbutton}>{isLogin ? "signin" : "logout"}</li>
  </ul>
</header>

        {(isOpen)&& <Model onclose={()=>SetIsOpen(false)}><Loginform SetIsOpen={()=>SetIsOpen(false)}/></Model>  }
          </div>
  )
}


export default Mainnav
