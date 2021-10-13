import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

const initial = {n: 2}
const reducer = (state, action) => {
  if(action.type === 'add'){
    return {n: state.n + action.number}
  }else if(action.type === 'multi'){
    return {n: state.n * 2}
  } else {
    throw new Error('unknown type')
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducer,initial)
  const {n} = state
  return (
    <div>
      <p>{n}</p>
      <button onClick={() => dispatch({type: 'add', number: 3})}>+1</button>
    </div>
	)
}

ReactDOM.render(<App />,document.getElementById('root'));
