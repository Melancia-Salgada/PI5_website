import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Title from './components/Title'

function App() {

  return (
   <>
    <main className='content-container'>
      <Header/>
      <div className='engloba'>
        <Title nome={'Dados Pessoais'}/>
      </div>
      
    </main>
   </>
  )
}

export default App
