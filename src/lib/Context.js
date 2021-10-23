class Context {
  constructor(value) {
    this.value = value;
  }

  provider = ({ children, value }) => {
    this.value = value;
    return children;
  };

  consumer = ({ children }) => children(this.value);
}

function createContext(value = null) {
  const myContext = new Context(value);
  return {
    Provider: myContext.provider,
    Consumer: myContext.consumer,
  };
}

export default createContext;
