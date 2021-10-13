import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root')

let n = 0
const App = () => {
  return (
    <div className="red">
      {n}
      <button onClick={()=>{
        n += 1
        render()
      }}>+1</button>
    </div>
  )
}
const render = () => ReactDOM.render(App(), root);
render()