import React, { useState } from 'react'
import Input from '../Input'
import Title from '../Title'
import './Form.scss'
import Dropdown from '../Dropdown'

function Form() {

  const[nome, setNome] = useState('')
  const[email, setEmail] = useState('')
  const[cpf, setCpf] = useState('')
  const[nascimento, setNascimento] = useState('')
  const[estCivil, setEstCivil] = useState('')
  const[nacionalidade, setNacionalidade] = useState('')
  const[escolaridade, setEscolaridade] = useState('')

  function onClick(evento) {
    evento.preventDefault()
    console.log({
      nome, email, cpf, nascimento, estCivil, nacionalidade, escolaridade
    })
  }

  return (
    <form className='form' onSubmit={onClick}>
      <div>
        <Title nome={'Dados Pessoais'}/>
        <Input obrigatorio label='Nome completo' type='text' name={'nome'} valor={nome} onChange={valor => setNome(valor)}/> {/*name usado para autocompletar*/}
        <div className='divider'>
          <Input obrigatorio  label='Email' type='email' name={'email'} valor={email} onChange={valor => setEmail(valor)}/>
          <Input obrigatorio  label='CPF' type='number' name={'cpf'} valor={cpf} onChange={valor => setCpf(valor)}/>
        </div>
        <div className='divider'>
          <Input obrigatorio  label='Data de Nascimento' type='date' name={'nascimento'} valor={nascimento} onChange={valor => setNascimento(valor)}/>
          <Dropdown obrigatorio  label='Estado civil' itens={['Solteiro', 'Casado', 'Divorciado', 'Viúvo', 'Separado']} valor={estCivil} onChange={valor => setEstCivil(valor)}/>
        </div>
        <div className='divider'>
          <Input obrigatorio label='Nacionalidade' type='text' name={'nacionalidade'} valor={nacionalidade} onChange={valor => setNacionalidade(valor)}/>
          <Input obrigatorio label='Escolaridade' type='text' name={'escolaridade'} valor={escolaridade} onChange={valor => setEscolaridade(valor)}/>
        </div>
      </div>
      <div>
        <Title nome={'Financeiro'}/>
        <div className='esquerda'>
          <Dropdown label='Declara imposto de renda?' itens={['Sim', 'Não']}/>
          <Dropdown label='Tem Compromisso Financeiro no Holerite?' itens={['Sim', 'Não']}/>
          <Dropdown label='Possui Restrição no nome?' itens={['Sim', 'Não']}/>
          <Dropdown label='Tipo de Renda:' itens={['Formal', 'Informal', 'Ambos']}/>
          <Dropdown label='Vai utilizar FGTS?' itens={['Sim', 'Não']}/>
          <Dropdown label='Imóvel Registrado no Nome?' itens={['Sim', 'Não']}/>
          <Dropdown label='Possui Algum Familiar ou Amigo que possa completar a Renda?' itens={['Sim', 'Não']}/>
        </div>
        
      </div>

      <button>Teste</button>
    </form>
  )
}

export default Form