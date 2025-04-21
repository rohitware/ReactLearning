import React from 'react'

// used destructuring 
const Footer = ({ compName, CompanyLoc }) => {

  // const {compName, CompanyLoc}= props;

  return (
    <>
      <h1>Welcome to Footer Component</h1>
      <h2>Thank you for visiting!</h2>
      <h3>Have a great day!</h3>
      <h3>{compName}, {CompanyLoc}</h3>
    </>
  )
}

export default Footer
