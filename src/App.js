import "./App.css";
import MyFunctionComponent from "./components/MyFunctionComonent";
import MyClassComponent from "./components/MyClassComponent";
import SimpleCalculator from "./components/SimpleCalculator";
import MathOperations from "./components/MathOperations";
import Counter from "./components/Counter";
import Child from "./components/childComponent";
import StateInFuncComp from "./StateInReact/StateInFuncComp";
import Body1 from "./propsInReact/Body1";
import Body2 from "./propsInReact/Body2";
import Header from "./propsInReact/Header";
import Footer from "./propsInReact/Footer";
import Account from "./propsInReact/Account";
import FavoriteColor from "./StateInReact/FavoriteColor";
import PackingList from "./conditionalRendering/PackingList";
import Hooks from "./components/Hooks";
import RefHook from "./components/RefHooks";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  const message = "I am from the Parent Component";

  const companyName = "Zest india it services";

  return (
    <>

      {/* <MyFunctionComponent />
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
      <FavoriteColor />
      <PackingList />
      <Hooks/>
      <RefHook/> */}



      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route index element={<MyFunctionComponent />} />
          <Route path="class-component" element={<MyClassComponent />} />
          <Route path="calculator" element={<SimpleCalculator />} />
          <Route path="math" element={<MathOperations />} />
          <Route path="counter" element={<Counter />} />
          <Route path="header" element={<Header compName={companyName} CompanyLoc={"pune"} />} />
          <Route path="body1" element={<Body1 mesg={"Welcome to Body 11"} />} />
          <Route path="body2" element={<Body2 />} />
          <Route path="account" element={<Account />} />
          <Route path="footer" element={<Footer compName={companyName} CompanyLoc={"pune"} />} />
          <Route path="child" element={<Child greeting={message} />} />
          <Route path="state" element={<StateInFuncComp />} />
          <Route path="favcol" element={<FavoriteColor />} />
          <Route path="list" element={<PackingList />} />
          <Route path="hook" element={<Hooks />} />
          <Route path="refhook" element={<RefHook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
