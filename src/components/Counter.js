import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  increaseAsync, decreaseAsync } from "../modules/counter";


function Counter(props){
    const number = useSelector(state => state.counter);
    const disptch = useDispatch();
    const onIncrease = () => {
        disptch(increaseAsync()) 
    }
    const onDecrease = () =>{
        disptch(decreaseAsync())
    }

    return(
        <div>
            <h2>{number}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

export default Counter;