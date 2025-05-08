import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Form from './components/Form'

function App() {

  return (
   <>
    <main className='content-container'>
      <Header/>
      <div className='engloba'>
        <Form/>
      </div>
    </main>
   </>
  )
}

export default App
