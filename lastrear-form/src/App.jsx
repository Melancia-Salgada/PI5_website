import { use, useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Form from './components/Form'
import Title from './components/Title'

function App() {

  const [segundoParticipante, degundoParticipante] = useState(false)

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
      
    </main>
   </>
  )
}

export default App
