import React from 'react'
import './Title.scss'

function Title({nome}) {
  return (
    <h1 className='title'>{nome}</h1>
  )
}

export default Title