import React from 'react'
import Input from '../Input'
import Title from '../Title'
import './Form.scss'

function Form() {
  return (
    <form className='form'>
      <div>
        <Title nome={'Dados Pessoais'}/>
        <Input label='Nome completo' type='text' name={'nome'}/> {/*name usado para autocompletar*/}
        <div className='divider'>
          <Input label='Email' type='email' name={'email'}/>
          <Input label='CPF' type='number' name={'cpf'}/>
        </div>
      </div>
    
    </form>
  )
}

export default Form