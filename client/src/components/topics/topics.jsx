import React from "react";
import Topic from "../topic/topic";
import './style.css'

export default function Topics() {
  return (
    <div className="d-flex justify-content-center align-items-center vw-100 vh-100 backOfGame">
      <div className="borderGame d-flex flex-column justify-content-center align-items-center w-75 h-75">
        <Topic />
      </div>
    </div>
  );
}
