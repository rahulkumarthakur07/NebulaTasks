import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground.Jsx'


const App = () => {

  
  return (
    <div className='relative w-full h-screen' >
      <Foreground/>
      <Background/>

    </div>
  )
}

export default App