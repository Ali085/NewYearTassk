import React from 'react'
import { NavLink } from 'react-router-dom'
import './inedx.scss'

function Navbar() {
    function myFunction() {
        var element = document.getElementById("burgerNavv");
        element.classList.toggle("mystyle");
      }
  return (
    <>
    <nav>
                <div className='NavDiv'>
                    <div className='NavLogo'>
                        <a href="#!">Start Bootstrap</a>
                    </div>
                    <div className='NavList'>
                        <ul>
                            <li><NavLink to={"/"}>HOME</NavLink></li>
                            <li><NavLink to={"/about"}>ABOUT</NavLink></li>
                            <li className='Git'><i class="fa-brands fa-github"></i></li>
                            
                        </ul>
                    </div>
                    <div className='Burger'>
                        <i onClick={myFunction} className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </nav>
             <div className='burgerNav' id='burgerNavv' >
             <ul>
                 <li><NavLink to={"/"}>HOME</NavLink></li>
                 <li><NavLink to={"/about"}>ABOUT</NavLink></li>
                 <li><i class="fa-brands fa-github"></i></li>
             </ul>
         </div>
         </>
  )
}

export default Navbar