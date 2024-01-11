import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement,incrementByAmount } from './store/counterSlice';
import { RootState } from './store';

export default function CounterDisplay() {
  const count = useSelector((state:RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{count}</div>
      <br />
      <button onClick={() => dispatch(increment())}>increment</button>&nbsp;
      <button onClick={() => dispatch(decrement())}>decrement</button>
     <br/>
      <button onClick={() => dispatch(incrementByAmount(4))}>increment by 4</button>
    </div>
  );
}
