import React, { useState } from "react";
import '../App.css';

export default function ToggleVisibility({ children }) {
  const [show, setShow] = useState();

  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? "Remove Playlist" : "Add Playlist";

  return (
    <div className="component-container">
      {show && children}
      <button className = 'button-2'onClick={toggleShow}>{buttonText}</button>
    </div>
  );
}