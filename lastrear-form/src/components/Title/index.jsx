import React from 'react'
import './Title.scss'

function Title({ nome, principal }) {
  return (
    <h1 className={`title  ${principal? 'principal':''}`}>{nome}</h1>
  )
}

export default Title
