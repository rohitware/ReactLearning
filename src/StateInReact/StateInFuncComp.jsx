import React, { useState } from 'react'

const StateInFuncComp = () => {

  var name = "Umesh";

  const [userName, setUserName] = useState("Rohit");

  const changeUserName = () => {
    console.log(name);
    name = "Umesh Bichukale";
    console.log(name);

  }
  const changeUserName1 = () => {
    console.log(userName);
    setUserName("Rohit Ware");
    console.log(userName);
  }

  return (
    <>
      <h1>State in Functional Component</h1>
      <h2>My name is : {name}</h2>
      <h2> My User name is : {userName}</h2>
      <button onClick={changeUserName}>Change Name</button>
      <button onClick={changeUserName1}>Change UserName</button>
    </>
  )
}

export default StateInFuncComp;
