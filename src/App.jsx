import { useState } from 'react'
import './App.css'
import CompA from './CompA';
import CompB from './CompB';
import React from 'react';
// import List from './components/List'
// import HoverCounter from './components/HoverCount'
// import ClickCount from './components/ClickCount'
// import Currency from './components/currency'
// import HTTP from './HTTP'
import { useContext } from 'react';
import Home from '../miniprojects/Home'
import { useReducer } from 'react'
export const Context=React.createContext()
function App() {
  const initialvalue =0;
  const reduce=(state,action)=>{
    switch(action){
      case "inc":
        return state+1
      case "dec":
        return state-1
      case "res":
        return initialvalue
      default :
       return state
    }
  }
  const [count,dispatch]=useReducer(reduce,initialvalue)
  return (
  <div id='idf'>
    <Context.Provider value={{dispatch}}>
      <CompA/>
      <CompB/>
    </Context.Provider> 
      {/* <List/> */}
      {/* <HoverCounter/>
      <ClickCount name="adam"/> */}
     {/* <Currency/> */}
     {/* <HTTP></HTTP> */}
      {/* <Hello2/>
      <Greet name="Adam" age="12" t="bad"><p>Hey all its adam </p></Greet>
      <Greet name="Marc" age="20"/>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleFive}>Inc Five</button>
      <button onClick={()=>{count,setCount(count-1)}}>Decrement</button> */}
      </div>
  )
}

export default App
