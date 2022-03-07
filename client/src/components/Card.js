import React from 'react'
import Image from './Image'

export default function Card({src, status, number, handleButtonClick}) {
  return (
    <div className='widget'>
      <div className='itemContainer'>
        <div className='info'>
          <h3>Image# {number}</h3>
          <h3>Status: {status}</h3>
        </div>
        <div className='buttons'>
          <button className='foaming' id='foaming' data-id={number} onClick={handleButtonClick}>foaming</button>
          <button className='not-foaming' id='non-foaming' data-id={number} onClick={handleButtonClick}>not foaming</button>
        </div>
        <Image src={src} />
      </div>
    </div>
  )
}
