import './App.css';
import MyFunctionComponent from './components/MyFunctionComonent';
import MyClassComponent from './components/MyClassComponent';
import SimpleCalculator from './components/SimpleCalculator';
import MathOperations from './components/MathOperations';
import Counter from './components/Counter';
import Child from './components/childComponent';

function App() {
  const message = "I am from the Parent Component";

  return (
    <>
      <MyFunctionComponent />
      <MyClassComponent />
      <SimpleCalculator />
      <MathOperations />
      <Counter />
      <Child greeting={message} />
    </>
  );
}

export default App;
