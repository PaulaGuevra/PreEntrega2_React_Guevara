import "./itemcount.css"
import { useState } from 'react'

function ButtonIncrement(props) {
    return (
      <button className="sumbtn" onClick={props.onClickFunc}>
      +
      </button>
    )
}

function ButtonDecrement(props) {
    return (
      <button className="resbtn" onClick={props.onClickFunc}>
      -
      </button>
    )
}

function Display(props) {
    return (
      <label className="cantidad">{props.message}</label>
    )
}

function ItemCount(){
const [counter, setCounter] = useState(1);
const incrementCounter = () => setCounter(counter + 1);
let decrementCounter = () => setCounter(counter - 1);
if(counter<=1) {
  decrementCounter = () => setCounter(1);
} 
    return (
        <div className="count"> 
          <ButtonDecrement onClickFunc={decrementCounter}/>
          <Display message={counter}/> 
          <ButtonIncrement onClickFunc={incrementCounter}/>
        </div>
    );
}

export default ItemCount