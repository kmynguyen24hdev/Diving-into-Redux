import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import {counterActions} from '../store/counterSlice'
const Counter = () => {
  const dispatch = useDispatch();
  // get data stored from store
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)
  
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  
  const increaseHandler = () => {
    dispatch(counterActions.increase(10)) // {type: SOME_UNIQUE_UNDENTIFIER, payload: 10}
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())

  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
