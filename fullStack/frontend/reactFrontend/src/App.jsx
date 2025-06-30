import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then(res => {
        setJokes(res.data)
      }).catch((err) => {
        console.error('Error fetching jokes:', err)
      })
  })

  return (
    <>
      <h1>Hello World</h1>
      <p>jokes:{jokes.length}</p>
      {
        jokes.map((joke, index) => {
          <div key={joke.id}>
            <h4>{joke.setup}</h4>
            <p>{joke.punchline}</p>
          </div>
        })
      }
    </>
  )
}

export default App
