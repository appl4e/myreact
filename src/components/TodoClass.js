import React from 'react';

export default class Todo extends React.Component {
  state = {
    todo: '',
    warning: null,
  };

  handleClick = (e) => {
    const inputValue = e.target.value;
    const warning = inputValue.includes('.js')
      ? 'You need javascript knowledge to complete the task. Do you have it?'
      : null;

    this.setState({
      todo: inputValue,
      warning,
    });
  };

  render() {
    const { todo, warning } = this.state;
    return (
      <div>
        <p>{todo}</p>
        <div>
          <textarea id="" cols="30" rows="5" value={todo} onChange={this.handleClick} />
        </div>

        <hr />
        <h2>{warning || 'Good Choice'}</h2>
      </div>
    );
  }
}
