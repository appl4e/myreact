import React from 'react';
import ThemeContext from '../context/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

export default class Content extends React.Component {
  componentDidMount() {
    console.log(this.context);
  }

  render() {
    const { theme, switchTheme } = this.context;
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
}
Content.contextType = ThemeContext;
