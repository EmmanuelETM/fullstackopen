import { useState } from 'react'
import LoginForm from './components/organisms/LoginForm/LoginForm'

function App() {
  
  return (
    <div className='bg-neutral-200 min-h-screen h-full flex flex-col items-center justify-center'>    
      <h1 className='text-xl mb-3'>Login</h1>
      <LoginForm />
    </div>

  )
}

export default App
