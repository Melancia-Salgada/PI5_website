import React from 'react'
import './Dropdown.scss'

function Dropdown({label='colocar nome', obrigatorio, itens}) {
  return (
    <div className='dropdown'>
      <label>{label}</label>
      <select required={obrigatorio}>
        <option value=''>Selecione uma opção</option> 
        {itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default Dropdown