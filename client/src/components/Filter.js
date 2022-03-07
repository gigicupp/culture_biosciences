import React from 'react'

export default function Filter({handleSelect}) {
  return (
    <div className='filter'>
      <label htmlFor='status'>
        Filter for images: 
      </label>
      <select id='status' onChange={handleSelect}>
        <option value='unclassified'>Unclassified</option>
        <option value='foaming'>Foaming</option>
        <option value='non-foaming'>Non-foaming</option>
      </select>
    </div>
  )
}
