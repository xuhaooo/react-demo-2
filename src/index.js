import React from 'react';
import ReactDOM from 'react-dom';

let _state = []
let index = 0
const myUseState = (initialValue) => {
  const currentIndex = index
  _state[currentIndex] = _state[currentIndex] === undefined ? initialValue : _state[currentIndex]
  const setState = (newValue) => {
    _state[currentIndex] = newValue
    reRender()
  }
  index += 1
  console.log(_state[currentIndex])
  return [_state[currentIndex], setState]
}

const reRender = () => {
  index = 0
  ReactDOM.render(<App/>, document.getElementById('root'))
}

const App = () => {
	const [n, setN] = myUseState(0)
  const [m, setM] = myUseState(0)
  const [x, setX] = myUseState(0)
	return (
    <div>
      <p>{n}</p>
      <button onClick={() => setN(n+1)}>+1</button>
      <p>{m}</p>
      <button onClick={() => setM(m+1)}>+1</button>
      <p>{x}</p>
      <button onClick={() => setX(x+1)}>+1</button>
    </div>
	)
}



// let _state = []
// let index = 0
// const myUseState = (initialValue) => {
//   const currentIndex = index
//   _state[currentIndex] = _state[currentIndex] === undefined ? initialValue : _state[currentIndex]
//   console.log('currentIndex:')
//   console.log(currentIndex)
//   console.log('_state:')
//   console.log(_state)
//   function setState(newValue){
//     _state[currentIndex] = newValue
//     render()
//   }
//   index += 1
//   return [_state[currentIndex], setState]
// }



// const render = () => {
//   index = 0
//   // eslint-disable-next-line
//   ReactDOM.render(<App />, document.getElementById('root'))
// }


// const App = () => {
//   const [n, setN] = myUseState(0)
//   const [m, setM] = myUseState(0)
//   return (
//     <div>
//       <p>{n}</p>
//       <button onClick={() => setN(n+1)}>+1</button>
//       <p>{m}</p>
//       <button onClick={() => setM(m+1)}>+1</button>
//     </div>
//   )
// }


ReactDOM.render(<App />,document.getElementById('root'));
