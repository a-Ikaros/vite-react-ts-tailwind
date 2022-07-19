import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export const Test3 = (props: any) => (
  <div>
    <div>hello, my name is {props.name} </div>
    <div> {props.mes} </div>
  </div>
);
export function Form(props: any) {
  return (
    <>
      <div>
        form
        <input type="text" />
      </div>
    </>
  )
}