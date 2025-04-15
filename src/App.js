import './App.css';
import MyFunctionComponent from './components/MyFunctionComonent';
import MyClassComponent from './components/MyClassComponent';
import SimpleCalculator from './components/SimpleCalculator';
import MathOperations from './components/MathOperations';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <MyFunctionComponent />
      <MyClassComponent />
      <SimpleCalculator />
      <MathOperations />
      <Counter />
    </>
  );
}

export default App;
