import React from "react";
import "./style.css";
import { BsDoorClosed } from "react-icons/bs";
import { HiOutlineStatusOnline } from 'react-icons/hi';
function InfoBar({ room }) {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <HiOutlineStatusOnline className="onlineIcon"/>
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          {/* <img src={closeIcon} alt="close image" /> */}
          <BsDoorClosed/>
        </a>
      </div>
    </div>
  );
}

export default InfoBar;
