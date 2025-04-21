import './App.css';
import MyFunctionComponent from './components/MyFunctionComonent';
import MyClassComponent from './components/MyClassComponent';
import SimpleCalculator from './components/SimpleCalculator';
import MathOperations from './components/MathOperations';
import Counter from './components/Counter';
import Child from './components/childComponent';
import StateInFuncComp from './StateInReact/StateInFuncComp';
import Body1 from './propsInReact/Body1';
import Body2 from './propsInReact/Body2';
import Header from './propsInReact/Header';
import Footer from './propsInReact/Footer';
import Account from './propsInReact/Account';

function App() {
  const message = "I am from the Parent Component";

  const companyName = "Zest india it services";

  return (
    <>
      <MyFunctionComponent />
      <MyClassComponent />
      <SimpleCalculator />
      <MathOperations />
      <Counter />
      <Header compName={companyName} CompanyLoc={"pune"} />
      <Body1 mesg={"Welcome to Body 11"} />
      <Body2 />

      <Account />

      <Footer compName={companyName} CompanyLoc={"pune"} />

      <Child greeting={message} />

      <StateInFuncComp />
    </>
  );
}

export default App;
