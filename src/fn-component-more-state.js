import React, { createContext } from 'react';
import ReactDOM from 'react-dom';

const name = 'Jobs'
const root = document.getElementById('root')

const App = () => {
  const [n, setN] = React.useState(0)
  const [m, setM] = React.useState(0)

  return (
    <div>
      {n} | {m}
      <button onClick={()=>setN(n+1)}>n+1</button>
      <button onClick={()=>setM(m+1)}>m+1</button>
    </div>
  )
} 

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = { user: {name: 'bob', age: 18}}
//   }
//   changeName(){
//     this.setState(state => {
//       return {user: {...state.user, name: 'jack'}}
//     })
//   }
//   render(){
//     return (
//       <div>
//         {this.state.user.name} | {this.state.user.age}
//         <button onClick={()=>this.changeName()}>+1</button>
//       </div>
//     )
//   }
// }
const render = () => ReactDOM.render(<App />, root);
render()