import React, { createContext } from 'react';
import ReactDOM from 'react-dom';

const name = 'Jobs'
const root = document.getElementById('root')

const App = (props) => {
  return <div>{props.name}</div>
} 

// class App extends React.Component{
//   render(){
//     return <div>{this.props.name}</div>
//   }
// }
const render = () => ReactDOM.render(<App name={name}/>, root);
render()