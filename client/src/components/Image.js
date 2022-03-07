import React from 'react'

export default function Image({src}) {
  return (
    <div className="imgContainer">
      <img src={src} alt=''/>
    </div>
  )
}
