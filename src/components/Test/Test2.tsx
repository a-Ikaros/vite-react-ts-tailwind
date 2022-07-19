import React, { Component } from 'react';
import { useState } from 'react';
import { Test3, Form } from './Test3';

export default function Test2() {
  const [childSay, setChildSay]: any = useState('');
  const [fatherSay, setFatherSay]: any = useState('');

  return (
    <>
      <div className="box father">
        我是父组件
        <div>子组件对我说：{childSay}</div>
        <input
          type="text"
          placeholder="我对子组件说"
          onChange={(e) => {
            setFatherSay(e.target.value);
          }}
        />
        <TestFC>
          <Test3 />
          {(ContainerProps: any) => <Test3 {...ContainerProps} name={'haha'} />}
        </TestFC>
        <Form></Form>
      </div>
    </>
  );
}

export function TestFC(props: any) {
  const ContainerProps = {
    name: 'alien',
    mes: 'let us learn react',
  };
  return props.children.map((item: any) => {
    if (React.isValidElement(item)) {
      // 判断是 react elment  混入 props
      return React.cloneElement(item, { ...ContainerProps }, item.props.children);
    } else if (typeof item === 'function') {
      return item(ContainerProps);
    } else return null;
  });
}
