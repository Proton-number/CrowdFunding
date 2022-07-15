import { useState } from 'react'
import './App.css'
import Fund from './components/Fund'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Fund />
    </div>
  )
}

export default App
