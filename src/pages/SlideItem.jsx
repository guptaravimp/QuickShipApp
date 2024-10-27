import React from 'react'
import leftslide from '../assets/left-arrow-next.svg'
import rightslide from '../assets/next-right-arrow-svgrepo-com.svg'
function SlideItem() {
  return (
    <div className='sliderbutton'>
      <img className='h-5 w-5' src={leftslide} alt="" />
      <img className='h-5 w-5' src={rightslide} alt="" />
    </div>
  )
}

export default SlideItem
