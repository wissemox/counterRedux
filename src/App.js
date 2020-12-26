import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import './App.css';
import {increment} from './actions/index'
import {decrement} from './actions/index'
import {ressa} from './actions/index'




function App() {

  const Counter = useSelector(state => state.Counter)
  const dispatch = useDispatch()
  const dispatch02 =  useDispatch()
  const dispatch03 =  useDispatch()
  return ( 
    <>
  
    <h1>Counter {Counter}</h1>
    <button onClick={()=> dispatch(increment())}>+</button>
    <button onClick={()=> dispatch02(decrement())}>-</button>
    <button onClick={()=>dispatch03(ressa()) }> Reset</button>
    </>
    
  
  );
}

export default App;
