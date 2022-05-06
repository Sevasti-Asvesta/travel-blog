import React from "react";

export default function journal(props) {
  return (
    <div>
      <img src={props.data.imageUrl} className="image" />
      <div className="main--content">
        <span className="location">
          <i class="fa-solid fa-location-dot"></i>
          {props.data.location}
        </span>
        <span className="url">{props.data.googleMapsUrl}</span>
        <h1 className="title">{props.data.title}</h1>
        <span className="date">
          {props.data.startDate}-{props.data.endDate}
        </span>
      </div>
      <p className="content">{props.data.description}</p>
      <hr />
    </div>
  );
}
