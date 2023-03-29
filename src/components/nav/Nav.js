import React, { useState } from 'react'
import { FcHome } from "react-icons/fc";
import './nav.scss'

const Nav = () => {
  const [active, setActive] = useState(false)
  return (
    <div className='nav'>
        <div className='home'>
           <a href='../components/Main.js'><FcHome size="32"/></a>
        </div>
        <div onClick={()=>{setActive(!active)}} className={"hambuger "+ (active && "active")}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
        </div>
        <div className={active && "menu"}>
            { active ? 
            <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Detail</li>
            </ul>: null}

        </div>
    </div>
  )
}

export default Nav