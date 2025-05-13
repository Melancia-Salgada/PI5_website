import React, { use, useState, useEffect} from 'react'
import Input from '../Input'
import Title from '../Title'
import './Form.scss'
import Dropdown from '../Dropdown'

function Form({segundoParticipante, onChangePart, isSegundo}) {
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
  const [valorRestricao, setValorRestricao] =useState('')

  const [tipoRenda, setTipoRenda] = useState('')
  const [rendaFormal, setRendaFormal] = useState('')
  const [rendaInformal, setRendaInformal] = useState('')
  const [tempoCarteira, setTempoCarteira] = useState('')

  const [usarFgts, setUsarFgts] = useState('')
  const [anoFgts, setAnoFgts] = useState('')

  const [imovelNome, setImovelNome] = useState('')
  const [procura, setProcura] = useState('')
  const [tipoImovel, setTipoImovel] = useState('')
  const [telefone1, setTelefone1] = useState('')
  const [telefone2, setTelefone2] = useState('')

  //Reseta variaveis fechadas
  useEffect(() => {
    if (restricao === 'Não') {
      setValorRestricao('')
    }
  }, [restricao])

  useEffect(() => {
    if (tipoRenda === 'Formal') {
      setRendaInformal('')
    } else if (tipoRenda === 'Informal') {
      setRendaFormal('')
      setTempoCarteira('')
    }
  }, [tipoRenda])

  useEffect(() => {
    if (usarFgts === 'Não') {
      setAnoFgts('')
    }
  }, [usarFgts])

  useEffect(() => {
    if (imovelNome === 'Não') {
    }
  }, [imovelNome])
  
  

  function onClick(evento) {
    evento.preventDefault()
  
    console.log({
      nome,
      email,
      cpf,
      nascimento,
      telefone1,
      telefone2,
      estCivil,
      nacionalidade,
      escolaridade,
      imposto,
      holerite,
      restricao,
      valorRestricao,
      tipoRenda,
      rendaFormal,
      rendaInformal,
      tempoCarteira,
      usarFgts,
      anoFgts,
      imovelNome,
      tipoImovel,
      procura
    })
  
    setNome('')
    setEmail('')
    setCpf('')
    setNascimento('')
    setTelefone1('')
    setTelefone2('')
    setEstCivil('')
    setNacionalidade('')
    setEscolaridade('')
    setImposto('')
    setHolerite('')
    setRestricao('')
    setValorRestricao('')
    setTipoRenda('')
    setRendaFormal('')
    setRendaInformal('')
    setTempoCarteira('')
    setUsarFgts('')
    setAnoFgts('')
    setImovelNome('')
    setTipoImovel('')
    setProcura('')
  
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
          <Input obrigatorio label='Telefone 1' type='tel' name='telefone1' valor={telefone1} onChange={valor => setTelefone1(valor)} placeholder='00 000000000'/>
          <Input label='Telefone 2' type='tel' name='telefone2' valor={telefone2} onChange={valor => setTelefone2(valor)}  placeholder='00 000000000' />
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
        
          <Dropdown obrigatorio label='Declara imposto de renda?' itens={['Sim', 'Não']} valor={checarVariavel(imposto)} onChange={valor => setImposto(valor)} />
          <Dropdown obrigatorio label='Tem Compromisso Financeiro no Holerite?' itens={['Empréstimo','Financiamento','Pensão', 'Não']} valor={checarVariavel(holerite)} onChange={valor => setHolerite(valor)} />
          
          <Dropdown obrigatorio label='Possui Restrição no nome?' itens={['Sim', 'Não']} valor={checarVariavel(restricao)} onChange={valor => setRestricao(valor)} />
          {restricao &&
            <Input label='Valor da restrição' type='number' valor={valorRestricao} onChange={valor => setValorRestricao(valor)}/>
          }
          
          <Dropdown obrigatorio label='Tipo de Renda:' itens={['Formal', 'Informal', 'Ambos']} valor={tipoRenda} onChange={valor => setTipoRenda(valor)} />
          <div className='divider'>
          {(tipoRenda === 'Formal' || tipoRenda === 'Ambos') &&
            <>
              <Dropdown obrigatorio label='1 Mês de Carteira Assinada?' itens={['Sim', 'Não']} valor={checarVariavel(tempoCarteira)} onChange={valor => setTempoCarteira(valor)} />
              <Input obrigatorio label='Renda Bruta Formal:' type='number' valor={rendaFormal} onChange={valor => setRendaFormal(valor)}/>
            </>
            
            
          }
          {(tipoRenda === 'Informal' || tipoRenda === 'Ambos') &&
            <Input obrigatorio label='Renda Bruta Informal:' type='number' valor={rendaInformal} onChange={valor => setRendaInformal(valor)}/>
          }
          </div>
          
          
          <Dropdown obrigatorio label='Vai utilizar FGTS?' itens={['Sim', 'Não']} valor={checarVariavel(usarFgts)} onChange={valor => setUsarFgts(valor)}/>
          {usarFgts &&
            <Dropdown obrigatorio label='3 Anos de FGTS?' itens={['Sim', 'Não']} valor={checarVariavel(anoFgts)} onChange={valor => setAnoFgts(valor)} />
          }
          
          <Dropdown obrigatorio label='Imóvel Registrado no Nome?' itens={['Sim', 'Não']} valor={checarVariavel(imovelNome)} onChange={valor => setImovelNome(valor)} />
          {!isSegundo && 
          <Dropdown obrigatorio label='Possui Algum Familiar ou Amigo que possa completar a Renda?' itens={['Sim', 'Não']} valor={checarVariavel(segundoParticipante)} onChange={onChangePart}/>
          }
          
        
      </div>
      <div>
        <Title nome='Imóvel'/>
          <Dropdown label='Procura:' itens={['Casa', 'Apartamento']} valor={procura} onChange={valor=>setProcura(valor)}/>
          <Dropdown label='Tipo:' itens={['Novo', 'Usado']} valor={tipoImovel} onChange={valor=>setTipoImovel(valor)}/>
      </div>
        
      {!segundoParticipante &&
        <button>Teste</button>
      }
      
    </form>
  )
}

export default Form
