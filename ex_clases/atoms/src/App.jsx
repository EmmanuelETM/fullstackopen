import { useState } from 'react'
import LoginForm from './components/organisms/LoginForm/LoginForm'

function App() {

  const user = "Emmanuel"
  const password = '123456'

  const [data, setData] = useState({
    username: '',
    password: '',
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setData({...data, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(data.username == user && data.password == password){
      console.log("Success")
    }
    else if (data.username != user || data.password != password) {
      console.log("Check your credentials")
    }
  }
  
  return (
    <div className='bg-neutral-200 min-h-screen h-full flex flex-col items-center justify-center'>    
      <h1 className='text-xl mb-3'>Login</h1>
      <LoginForm 
        data={data}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>

  )
}

export default App
