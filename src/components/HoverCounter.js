import React from 'react';

const HoverCounter = (props) => {
  const { count, incrementCount, theme } = props;
  const style =
    theme === 'dark'
      ? { backgroundColor: '#000000', color: 'white' }
      : { backgroundColor: '#FFFFFF', color: 'black' };
  return (
    <div>
      <h1 type="button" onMouseOver={incrementCount} style={style}>
        Hovered {count} Times
      </h1>
    </div>
  );
};

export default HoverCounter;
