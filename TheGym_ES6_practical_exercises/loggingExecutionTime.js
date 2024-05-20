const logExecutionTime = (func) => {
    return (...args) => {
      let start = performance.now();
      func(...args);
      return performance.now() - start;
    };
  };
  console.log(logExecutionTime())