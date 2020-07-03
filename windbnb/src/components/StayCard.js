import React from "react";
import RatingStar from "../assets/RatingStar.svg";

const StayCard = ({ stay }) => {
  return (
    <div className='stay-card'>
      <img src={stay.photo} alt="stay card"></img>
      <div className='stay-card-info'>
      {stay.superHost && (
        <p id="super-host-button">Super Host</p>
      )}
        <p id="type" style={stay.superHost ? null : {float: "left"}}>{stay.type}</p>
        <div id="rating">
          <img src={RatingStar} alt='star rating'></img>
          {stay.rating}
        </div>
        <div id='title'>{stay.title}</div>
      </div>
   
    </div>
  )
}

export default StayCard;