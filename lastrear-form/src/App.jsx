import { use, useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Form from './components/Form'
import Title from './components/Title'
import Footer from './components/Footer'

function App() {

  const [segundoParticipante, setSegundoParticipante] = useState('')
  const [dadosPart1, setDadosPart1] = useState('')
  const [dadosPart2, setDadosPart2] = useState('')
  
  return (
   <>
    <main className='content-container'>
      <Header/>
        {segundoParticipante && 
          <>
            <Title nome={'Participante 1'}/>
          </>
        }
      <div className='engloba'>
        <Form segundoParticipante={segundoParticipante} onChangePart={valor => setSegundoParticipante(valor)}/>
      </div>
        {segundoParticipante && 
          <>
            <Title nome={'Participante 2'}/>
          <div className='engloba'>
            <Form isSegundo/>
          </div>
          </>
            
        }
      
      <Footer/>
    </main>
   </>
  )
}

export default App
