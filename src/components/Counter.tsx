import { useState } from "react";
import classes from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={increment} className={classes.btn}>
        increment
      </button>
    </div>
  );
};

export default Counter;
