import React from "react";

const StayCard = ({stay}) => {
  return (
    <div>
      <img src={stay.photo} alt="stay card" style={{height: "100px", width: "100px"}}></img>
      {stay.superHost && (
        <div>Super Host</div>
      )}
      <div>{stay.type}</div>
      <div>{stay.rating}</div>
      <div>{stay.title}</div>
    </div>
  )
}

export default StayCard;