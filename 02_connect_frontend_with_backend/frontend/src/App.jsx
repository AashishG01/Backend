import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'


// proxy 
function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=> {
    axios.get('/api/jokes')
    .then((response)=> {
      setJokes(response.data);
    })
    .catch((error)=> {
      console.log(error);
    })
  }
  )
  return (
    <>
     <h1>This is my frontend</h1>
     <p> JOKES: {jokes.length}</p>

     {
      jokes.map((joke,index)=>(
        <div key={joke.id}>
          <p>{joke.joke}</p>
        </div>
      ))
     }
    </>
  )
}

export default App



// using cors(cross origin) for software protection  agar url different toh bhi cors
// below are the solution to cors