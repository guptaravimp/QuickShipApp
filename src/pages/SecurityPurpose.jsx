import React from 'react'
import trusted from '../assets/trusted.png'
import lowestprice from '../assets/lowestprice.png'
import Freeshipping from '../assets/freeshipping.png'
function SecurityPurpose() {
  return (
    <>

<div className='itemapp pl-4 pr-4'>
     <img className='  h-[50px] w-[50px]' src={trusted} alt="" />
     <span>101% Original</span>
    </div>
     <div className='itemapp pl-4 pr-4'>
     <img className=' h-[50px] w-[50px]' src={lowestprice} alt="" />
     <span>Lowest Price</span>
    </div>

    <div className='pl-4 pr-4'>
     <img className='  h-[50px] w-[50px]' src={Freeshipping} alt="" />
     <span>Free Shipping</span>
    </div>

    </>
    
  )
}

export default SecurityPurpose
