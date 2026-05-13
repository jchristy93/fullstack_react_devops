import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    axios.get('/api/health')
      .then((res) => {
        setMessage(res.data.message)
      })
      .catch(() => {
        setMessage('Backend Error')
      })
  }, [])

  return (
    <div style={{ padding: '40px' }}>
      <h1>React Frontend</h1>

      <h2>Backend Response:</h2>

      <p>{message}</p>
    </div>
  )
}

export default App
