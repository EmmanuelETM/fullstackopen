import { useState } from 'react'
import LoginForm from './components/organisms/LoginForm/LoginForm'

function App() {

  const [data, setData] = useState({
    username: '',
    password: '',
  })

  const handleChange = (event) => {
      const { name, value } = event.target
      setData({...data, [name]: value})
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Inicio de Sesion: ', data)
  }


  return (
    <div className='bg-neutral-200 min-h-screen h-full flex flex-col items-center justify-center'>    
      <h1 className=''>Login</h1>
      <LoginForm handleSubmit={handleSubmit} handleChange={handleChange} data={data}/>
    </div>

  )
}

export default App
