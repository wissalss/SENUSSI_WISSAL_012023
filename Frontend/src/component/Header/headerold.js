import React, { useEffect } from 'react'
import logo from "../../assets/argentBankLogo.png"
import "./Header.css"
import {FaUserCircle} from 'react-icons/fa'
import { Link} from 'react-router-dom'

function Header() {

    
    function getProfile(token){
        const url = "http://localhost:3001/api/v1/user/profile"
        fetch (url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type":"application/json",
            "Authorization":"Bearer " + token 
          },
        })
        .then((response)=> response.json())
        .then((data)=> {
            console.log(data)
          if (data?.body?.token) {
            
          }
        })
    }
    useEffect(()=> {
        const token = localStorage.getItem("token")??sessionStorage.getItem("token")
        if (token) {
            getProfile(token)
        }
    }, [])
    return (
            <nav className="main-nav">
                <Link to='/' className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                
                    <div className="main-nav-item">
                        <FaUserCircle />
                       <a href='/login'> Sign In </a>
                    </div>
               
            </nav>
    )
}

export default Header;
