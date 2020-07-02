import React from "react";
import LocationSVG from "../assets/Location.svg";

const Location = (props) => {
  return(
    <div>
      <img src={LocationSVG} alt="location"></img>
      <p>Helsinki, Finland</p>
    </div>
  )
};

export default Location;