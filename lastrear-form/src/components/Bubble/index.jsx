import React from 'react'
import './Bubble.scss'

function Bubble({children,link}) {
  return (
    <a className='bubble' href={link} target='_blanck'>
      {children}
    </a>
  )
}

export default Bubble