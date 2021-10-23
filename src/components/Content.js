import ThemeContext from '../context/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

const Content = () => (
  <div>
    <h1>This is a content</h1>
    <Counter
      render={(count, incrementCount) => (
        <ThemeContext.Consumer>
          {({ theme }) => (
            <HoverCounter count={count} incrementCount={incrementCount} theme={theme} />
          )}
        </ThemeContext.Consumer>
      )}
    />
  </div>
);

export default Content;
