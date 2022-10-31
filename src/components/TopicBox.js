import React from "react";
import "./TopicBox.css";

export default function TopicBox(props) {
  return (
    <div>
      <div className="topicBox">
        <span class="text">This is the {props.section}</span>
      </div>
    </div>
  );
}
