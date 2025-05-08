import React from 'react'
import './Input.scss'

function Input({label=false, type ='', name}) {
  return (
    <div className={`input ${type}`}>
      {label && 
      <label>{label}</label>
      }
      <input type={type} name={name}/>
    </div>
  )
}

export default Input