import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions'

function App() {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter)
    const isLogged = useSelector((state) => state.isLogged)
    return (
        <div className='App'>
            <h1>Redux Increment {counter}</h1>
            <button onClick={() => dispatch(increment(10))}>+</button>
            <button onClick={() => dispatch(decrement(10))}>-</button>
            {isLogged ? <h3>Valuable Informations</h3> : ''}
        </div>
    )
}

export default App
