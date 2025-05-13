import React, { useState } from 'react'
import Input from '../Input'
import Title from '../Title'
import './Form.scss'
import Dropdown from '../Dropdown'

function Form() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [nascimento, setNascimento] = useState('')
  const [estCivil, setEstCivil] = useState('')
  const [nacionalidade, setNacionalidade] = useState('')
  const [escolaridade, setEscolaridade] = useState('')
  const [imposto, setImposto] = useState('')
  const [holerite, setHolerite] = useState('')
  const [restricao, setRestricao] = useState('')
  const [tipoRenda, setTipoRenda] = useState('')
  const [usarFgts, setUsarFgts] = useState('')
  const [imovelNome, setImovelNome] = useState('')

  function onClick(evento) {
    evento.preventDefault()

    console.log({
      nome,
      email,
      cpf,
      nascimento,
      estCivil,
      nacionalidade,
      escolaridade,
      imposto,
      holerite,
      restricao,
      tipoRenda,
      usarFgts,
      imovelNome
    })

    setNome('')
    setEmail('')
    setCpf('')
    setNascimento('')
    setEstCivil('')
    setNacionalidade('')
    setEscolaridade('')
    setImposto('')
    setHolerite('')
    setRestricao('')
    setTipoRenda('')
    setUsarFgts('')
    setImovelNome('')

    window.scrollTo(0, 0)
  }

  
  function checarVariavel(valor) {
    if (valor === true) return 'Sim'
    if (valor === false) return 'Não'
    return valor
  }
    
  

  return (
    <form className='form' onSubmit={onClick}>
      <div>
        <Title nome='Dados Pessoais' />
        <Input obrigatorio label='Nome completo' type='text' name='nome' valor={nome} onChange={valor => setNome(valor)} />
        
        <div className='divider'>
          <Input obrigatorio label='Email' type='email' name='email' valor={email} onChange={valor => setEmail(valor)} />
          <Input obrigatorio label='CPF' type='number' name='cpf' valor={cpf} onChange={valor => setCpf(valor)} />
        </div>

        <div className='divider'>
          <Input obrigatorio label='Data de Nascimento' type='date' name='nascimento' valor={nascimento} onChange={valor => setNascimento(valor)} />
          <Dropdown obrigatorio label='Estado civil' itens={['Solteiro', 'Casado', 'Divorciado', 'Viúvo', 'Separado']} valor={estCivil} onChange={valor => setEstCivil(valor)} />
        </div>

        <div className='divider'>
          <Input obrigatorio label='Nacionalidade' type='text' name='nacionalidade' valor={nacionalidade} onChange={valor => setNacionalidade(valor)} />
          <Input obrigatorio label='Escolaridade' type='text' name='escolaridade' valor={escolaridade} onChange={valor => setEscolaridade(valor)} />
        </div>
      </div>

      <div>
        <Title nome='Financeiro' />
        <div className='esquerda'>
          <Dropdown obrigatorio label='Declara imposto de renda?' itens={['Sim', 'Não']} valor={checarVariavel(imposto)} onChange={valor => setImposto(valor)} />
          <Dropdown obrigatorio label='Tem Compromisso Financeiro no Holerite?' itens={['Sim', 'Não']} valor={checarVariavel(holerite)} onChange={valor => setHolerite(valor)} />
          <Dropdown obrigatorio label='Possui Restrição no nome?' itens={['Sim', 'Não']} valor={checarVariavel(restricao)} onChange={valor => setRestricao(valor)} />
          <Dropdown obrigatorio label='Tipo de Renda:' itens={['Formal', 'Informal', 'Ambos']} valor={tipoRenda} onChange={valor => setTipoRenda(valor)} />
          <Dropdown obrigatorio label='Vai utilizar FGTS?' itens={['Sim', 'Não']} valor={checarVariavel(usarFgts)} onChange={valor => setUsarFgts(valor)} />
          <Dropdown obrigatorio label='Imóvel Registrado no Nome?' itens={['Sim', 'Não']} valor={checarVariavel(imovelNome)} onChange={valor => setImovelNome(valor)} />
          <Dropdown label='Possui Algum Familiar ou Amigo que possa completar a Renda?' itens={['Sim', 'Não']} />
        </div>
      </div>

      <button>Teste</button>
    </form>
  )
}

export default Form
