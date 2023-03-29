import React, { useEffect } from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsWechat } from "react-icons/bs";
import './main.scss'
import cat1 from '../img/cat1.jpg'
import cat2 from '../img/cat2.jpg'
import cat3 from '../img/cat3.jpg'

let number = 0;

const Main = () => {
  useEffect(()=>{
    setInterval(()=>{
      changeImg()
      console.log(number)
    }, 1000)
  })

  function changeImg(){
    if(number === 0){
      document.querySelector('.mainImg').style.backgroundImage = `url('${cat1}')`;
      number = 1;
    }else if(number === 1){
      document.querySelector('.mainImg').style.backgroundImage = `url('${cat2}')`;
      number = 2;
    }else if(number === 2){
      document.querySelector('.mainImg').style.backgroundImage = `url('${cat3}')`;
      number = 0;
    }
  }
    
  return (
    <>
        <div className='main'>
          <div className='wrap'>
            <div className='topbar'>
              <div className='logo'>hello</div>
            </div>
            <div className='mainImg' style={{ backgroundImage : `url('${cat1}')`}}>
            </div>
          </div>
          <div className='right-wrap'>
              <div className='cart-wrap'>
                <FaShoppingBag className='cart' size="24" />
              </div>
              <div className='login'>Login</div>
              <div className='arrow'>
                <p>Scroll down</p>
                <AiOutlineArrowDown size="24" />
              </div>
              <div className='chat'>
                <BsWechat size="32" />
              </div>
          </div>
        </div>
    </>
  )
}

export default Main