import { useState } from 'react'
import './App.css'
import Currency from './components/Currency'

function App() {

  console.log("FEBEte")
  return (
    <div style={{
      border: '2px solid blue',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyItems: 'center', alignItems: 'center'
    }}>
      <Currency />

    </ div>
  )
}

export default App
