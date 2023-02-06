import React from "react";
import data from "./data.json";

export default function Text() {
  return (
    <div>
      {data.map((frase) => {
        return <p key={frase}>{frase}</p>;
      })}
    </div>
  );
}
