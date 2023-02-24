import { useState } from "react";

export default function RepetitionExercise(props) {
  let { name } = props;
  let [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h4>{name}</h4>
        <br />
        Reps: {count}
        <br />
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}
