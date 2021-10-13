import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root')

let n = 43
const App = () => {
  // return n%2 === 0 ? <div>n 是偶数</div> : <div>n 是奇数</div>

  // return (
  //   <div>
  //     {n % 2 === 0 ? <div>n 是偶数</div> : <div>n 是奇数</div>}
  //   </div>
  // )

  // const content = (
  //   <div>
  //     {n % 2 === 0 ? <div>n 是偶数</div> : <div>n 是奇数</div>}
  //   </div>
  // )
  // return content

  // const inner = n%2 ===0 ? <div>n 是偶数</div> : <div>n 是奇数</div>
  // const content = <div>{inner}</div>
  // return content

  let inner
  if(n%2=== 0){
    inner = <div>n 是偶数</div>
  }else {
    inner = <div>n 是奇数</div>
  }
  return <div>{inner}</div>
}
const render = () => ReactDOM.render(App(), root);
render()