import { useState } from 'react';

function Todo() {
  const [todo, setTodo] = useState('');
  const [warning, setWarning] = useState(null);

  const handleClick = (e) => {
    const inputValue = e.target.value;
    const updatedWarning = inputValue.includes('.js')
      ? 'You need javascript knowledge to complete the task. Do you have it?'
      : 'Good Choice';

    setTodo(inputValue);
    setWarning(updatedWarning);
  };
  return (
    <div>
      <p>{todo}</p>
      <div>
        <textarea id="" cols="30" rows="5" value={todo} onChange={handleClick} />
      </div>

      <hr />
      <h2>{warning}</h2>
    </div>
  );
}

export default Todo;
