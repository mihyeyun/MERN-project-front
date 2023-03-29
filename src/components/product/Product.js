import React, { useEffect, useState } from 'react'
import './product.scss'
import goods1 from '../img/goods1.png'
import goods2 from '../img/goods2.png'
import { FaShoppingBag } from "react-icons/fa";

const Product = () => {
  let [goods, setGoods] = useState(1);

  useEffect(()=>{
    changeGoods()
  })

  function changeGoods(){
    if(goods === 1){
      document.querySelector('.img').style.backgroundImage = `url(${goods1})`;
    }else if(goods === 2){
      document.querySelector('.img').style.backgroundImage = `url(${goods2})`;
    }
  }
  return (
    <div className='product'>
      <div className='product-wrap'>
        <div className='title'>Give a special gift <br /> to your lovely cat</div>
        <div className='buy'>
          <div className='goods-red-wrap' onClick={()=>{setGoods(1)}}>
            <div className='goods-red'></div>
              <p>닭가슴살</p>
            </div>
          <div className='goods-blue-wrap' onClick={()=>{setGoods(2)}}>
            <div className='goods-blue'></div>
              <p>참치&가리비관자</p>
            </div>
          <button className='buy-botton'>
            <FaShoppingBag className='icon' size="32" />
          </button>
        </div>
        <div className='goods-img'>
          <div className='img' style={{ backgroundImage: `url(${goods1})`}}></div>
        </div>
      </div>
    </div>
  )
}

export default Product