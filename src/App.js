import React from 'react'
import logo from './logo.svg'
import Assignment1 from './UdemyMax/Assignment1/Assignment1.js'
import Assignment2 from './UdemyMax/Assignment2/Assignment2.js'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Assignment2 />
        <Assignment1 />
      </header>
    </div>
  )
}

export default App
