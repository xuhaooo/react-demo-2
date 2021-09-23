import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';


class Son extends React.Component {
  constructor(){
    super()
    this.state = {
      n: 0
    }
  }
  add(){
    this.setState({n: this.state.n + 1})
  }
  render(){
    return (
      <div className="Son">
        爸爸 n：{this.state.n}
        <button onClick={()=>this.add()}>+1</button>
        <Grandson />
      </div>
    )
  }
}

function Grandson(){
  const [n, setN] = React.useState(0)
  return (
    <div className="Grandson">
      孙子 n：{n}
      <button onClick={() => setN(n + 1)}>+1</button>
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));
