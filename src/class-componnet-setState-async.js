import React, { createContext } from 'react';
import ReactDOM from 'react-dom';

const name = 'Jobs'
const root = document.getElementById('root')

// const App = (props) => {
//   return <div>{props.name}</div>
// } 

class App extends React.Component{
  constructor(){
    super()
    this.state = { n: 0 }
  }
  addN(){
    // this.setState({n: this.state.n + 1})
    // console.log(this.state.n)
    
    // this.setState(state => {
    //   return {n: state.n + 1}
    // })

    this.setState(state => {
      const n = state.n + 1
      console.log(n)
      return {n: n}
    })
  }
  render(){
    return (
      <div>
        {this.state.n}
        <button onClick={()=>this.addN()}>+1</button>
      </div>
    )
  }
}
const render = () => ReactDOM.render(<App />, root);
render()