import React from 'react'

const Header = (props) => {
  // props.compName = "Codemind Technologys Pvt Ltd";
  const { compName, CompanyLoc } = props;
  return (
    <>
      <h1>Welcome to Header Component</h1>

      <h3>{compName} , {CompanyLoc}</h3>


    </>
  )
}

export default Header
