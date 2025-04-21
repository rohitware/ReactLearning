import React from 'react'

const Body11 = (props) => {
  return (
    <div>
      <h1>Body11</h1>
      <h2 >Message from App component : {props.msg}</h2>

      <h2> Person Obj : {JSON.stringify(props.personObj)} </h2>
      <h3>Array Values : {(props.arrVal || []).join(',')}</h3>

    </div>
  )
}

export default Body11
