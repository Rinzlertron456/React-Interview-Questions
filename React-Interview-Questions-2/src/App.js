import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  let arr=["sad","isdh","hasg"];
  let obj=arr.reduce((a,it)=>({...a,[it]:it}),{});
  return (
    <>
    console.log(obj);
    </>
  );
}

export default App;
