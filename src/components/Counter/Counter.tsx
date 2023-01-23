import React, { useState } from "react";

import styles from "./Counter.module.css";

type CounterProps = {
  initialValue: number;
};

const Counter = ({ initialValue = 0 }: CounterProps) => {
  const [counter, setCounter] = useState(initialValue);
  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter + 1);
  const reset = () => setCounter(0);

  return (
    <>
      <p>Counter: {counter}</p>
      <div className={styles.buttonsWrapper}>
        <button className={styles.button} type="button" onClick={increase}>
          +1
        </button>
        <button className={styles.button} type="button" onClick={increase}>
          -1
        </button>
      </div>
      <div>
        <button className={styles.button} type="button" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
};

export { Counter };
