import { use, useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Form from './components/Form'
import Title from './components/Title'
import Footer from './components/Footer'

function App() {

  const [segundoParticipante, degundoParticipante] = useState(false)
  const [dadosPart1, setDadosPart1] = useState('')
  const [dadosPart2, setDadosPart2] = useState('')
  
  return (
   <>
    <main className='content-container'>
      <Header/>
      <div className='engloba'>
        {segundoParticipante && 
          <>
            <Title nome={'Participante 1'}/>
            <Form/>
          </>
        }

        <Form/>
        {segundoParticipante && 
          <>
            <Title nome={'Participante 2'}/>
            <Form/>
          </>
        }
      </div>
      <Footer/>
    </main>
   </>
  )
}

export default App
