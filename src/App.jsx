import { useState } from 'react'

import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {
  

  return (
    <div onScroll={()=>console.log("qwfwqf")} className='container'>
     
        <Header></Header>
        <Main></Main>
        
        
    </div>
  )
}

export default App
