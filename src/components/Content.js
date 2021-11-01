import React, { useContext } from 'react';
import ThemeContext from '../context/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

export default function Content() {
  const { theme, switchTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>This is a content</h1>
      <Counter
        render={(count, incrementCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
            theme={theme}
            switchTheme={switchTheme}
          />
        )}
      />
    </div>
  );
}
