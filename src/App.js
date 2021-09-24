// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import useUpdate from './useUpdate'

const App = props => {
  const [n, setN] = useState(0)
  const click = () => {
    setN(n + 1)
  }

  useUpdate(()=>{ console.log('变了') }, n)

  return (
    <div>
      {n}
      <button onClick={click}>+1</button>
    </div>
  )
}

export default App;
