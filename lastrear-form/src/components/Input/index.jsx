import React from 'react'
import './Input.scss'

function Input({label=false, type ='', name, placeholder='', valor, onChange, obrigatorio}) {
  
  const aoAlterar = (e) => {
    onChange(e.target.value)
  }
  
  return (
    <div className={`input ${type}`}>
      {label && 
      <label>{label}</label>
      }
      <input type={type} onChange={aoAlterar} name={name} required={obrigatorio} placeholder={placeholder} value={valor} />
    </div>
  )
}

export default Input