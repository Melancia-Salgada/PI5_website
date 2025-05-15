import React from 'react'
import logo from '/logo.svg'
import './Header.scss'


function Header() {
  return (
    <header className='header' id='header'>
      <section>
        <img src={logo} draggable="false"/>
      </section>
    </header>
  )
}

export default Header