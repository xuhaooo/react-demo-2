import React, { createContext } from 'react';
import ReactDOM from 'react-dom';

const name = 'Jobs'
const root = document.getElementById('root')

// const App = (props) => {
//   const [n, setN] = React.useState(0)

//   return (
//     <div>
//       {n}
//       <button onClick={()=>setN(n+1)}>+1</button>
//     </div>
//   )
// } 

class App extends React.Component{
  constructor(){
    super()
    this.state = { user: {name: 'bob', age: 18}}
  }
  changeName(){
    // this.setState(state => {
    //   return {user: {...state.user, name: 'jack'}}
    // })
    const user = Object.assign({}, this.state.user)
    user.name = 'jack'
    this.setState({user: user})
  }
  render(){
    return (
      <div>
        {this.state.user.name} | {this.state.user.age}
        <button onClick={()=>this.changeName()}>+1</button>
      </div>
    )
  }
}
const render = () => ReactDOM.render(<App />, root);
render()