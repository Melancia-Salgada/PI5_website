import React from 'react'
import logo from '/logo.svg'
import './Header.scss'


function Header() {
  return (
    <header className='header'>
      <section>
        <img src={logo}/>
      </section>
    </header>
  )
}

export default Header