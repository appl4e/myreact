import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const states = []; // [0: [value, setter], 1: [value, setter]]
let stateIndex = -1;

function useState(defaultValue: any): void {
  // eslint-disable-next-line no-plusplus
  const index = ++stateIndex;

  if (states[index]) return states[index];

  const setValue = (newValue) => {
    states[index][0] = newValue;
    // eslint-disable-next-line no-use-before-define
    reRender();
  };
  const returnArray = [defaultValue, setValue];
  states[index] = returnArray;
  return returnArray;
}

function App() {
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

function reRender() {
  stateIndex = -1;
  ReactDOM.render(<App />, document.getElementById('root'));
}

reRender();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
