import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root')

const App = (props) => {
//   return props.numbers.map((n, index) => {
//     return <div>下标是 {index}，值是 {n}</div>
//   })

// return (
//   <div>
//     {props.numbers.map((n, index) => {
//       return <div>下标是 {index}，值是 {n}</div>
//     })}
//   </div>
//   )

  const arr = []
  for(let i =0; i < props.numbers.length; i++){
    arr.push(<div>下标是 {i}，值是 {props.numbers[i]}</div>)
  }
  return <div>{arr}</div>
}
const render = () => ReactDOM.render(<App numbers={['好','好','学','习']}/>, root);
render()