import React from "react";
import Nav from "./components/Nav";
import Journal from "./components/Journal";
import "./styles.css";
import data from "./data";
console.log(data);

export default function App() {
  const DataElement = data.map((data) => {
    return <Journal key={data.id} data={data} />;
  });
  return (
    <div className="container">
      <Nav />
      {DataElement}
    </div>
  );
}
