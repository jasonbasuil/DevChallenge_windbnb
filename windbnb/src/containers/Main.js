import React from "react";
import StayCard from "../components/StayCard";

const Main = ({stays}) => {

  return (
    <div>
      <h3>Stays in Finland</h3>
      <p>Number of stays 12+</p>
      {stays.map(stay => (
        <StayCard stay={stay}/>
      ))}
      {console.log(stays[0])}
    </div>
  )
}

export default Main;