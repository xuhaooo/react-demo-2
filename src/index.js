import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

function App() {
  let n = 124
  return (
    <div className="App">
      爸爸
      <Son messageForSon={n%2 === 0 ? '偶数' : '奇数'}/>
    </div>
  )
}
class Son extends React.Component {
  render(){
    return (
      <div className="Son">
        爸爸对儿子说：{this.props.messageForSon}
        <Grandson messageForGrandson="孙子你好"/>
      </div>
    )
  }
}
const Grandson = (props) => {
  return (
    <div className="Grandson">
      爸爸对儿子说，你爷爷让我跟你说：{props.messageForGrandson}
    </div>
  )
}
// class Son extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       n: 0
//     }
//   }
//   add(){
//     this.setState({n: this.state.n + 1})
//   }
//   render(){
//     return (
//       <div className="Son">
//         爸爸 n：{this.state.n}
//         <button onClick={()=>this.add()}>+1</button>
//         <Grandson />
//       </div>
//     )
//   }
// }

// function Grandson(){
//   const [n, setN] = React.useState(0)
//   return (
//     <div className="Grandson">
//       孙子 n：{n}
//       <button onClick={() => setN(n + 1)}>+1</button>
//     </div>
//   )
// }

ReactDOM.render(<App />,document.getElementById('root'));
