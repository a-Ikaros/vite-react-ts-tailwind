import React from 'react';
const msg = '你好世界';
const flag = false;
const arr = ['刘备', '关羽', '张飞'];
const style = { background: 'skyblue', color: flag ? 'red' : 'white' };
export default class Test extends React.Component {
  render() {
    return (
      <>
        <h2>{msg}</h2>
        <hr />
        {/*  */}
        <label htmlFor="username">用户名:</label>
        <input type="text" id="username" />
        <hr />
        <div style={style}>一个小盒子</div>
        <ul>
          {arr.map((item, index) => {
            return (
              <>
                <li key={index}> {item}</li>
                <span>行</span>
              </>
            );
          })}
        </ul>
      </>
    );
  }
}



