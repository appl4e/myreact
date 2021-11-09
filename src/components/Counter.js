import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const addFive = () => {
    let i = 0;
    while (i < 5) {
      setCount((prevCount) => prevCount + 1);
      i += 1;
    }
  };

  return (
    <div>
      {count}
      <p>
        <button type="button" onClick={() => setCount((prevState) => prevState + 1)}>
          Add 1
        </button>
      </p>
      <p>
        <button type="button" onClick={addFive}>
          Add 5
        </button>
      </p>
    </div>
  );
}
export default Counter;
