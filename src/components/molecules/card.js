import React from "react";

export default function Card(props) {
  return (
    <div class="card">
      <img src={props.source} alt="" />
      <div class="card-content">
        <h3 class="card-title">{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
