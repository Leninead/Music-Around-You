import React from 'react'
import banner from "../assets/banner.jpg"

const ItemListContainer = ({greeting}) => {
  return (
    <div className='greeting-welcome'>{greeting}
    
    
    <img className='banner-picture' src={banner}/>

    </div>
     

  )
}

export default ItemListContainer