import React from 'react'
import './Dropdown.scss'

function Dropdown({label='colocar nome', obrigatorio=false, itens, onChange, valor}) {
  
  const aoAlterar = (e) => {
    const valorSelecionado = e.target.value
    if (valorSelecionado === 'Sim') {
      onChange(true)
    } else if (valorSelecionado === 'Não') {
      onChange(false)
    } else {
      onChange(valorSelecionado)
    }
  }

  return (
    <div className='dropdown'>
      <label>{label} {obrigatorio && '*'}</label>
      <select required={obrigatorio} value={valor} onChange={aoAlterar}>
        <option value=''>Selecione uma opção</option> 
        {itens.map(item => <option key={item} value={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default Dropdown