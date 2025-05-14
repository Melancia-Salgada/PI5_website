import React from 'react'
import './Button.scss'

function Button({nome="",onClick,type=''}) {
  return (
    <button className='botao' type={type} onClick={onClick}>
      {nome}
    </button>
  )
}

export default Button