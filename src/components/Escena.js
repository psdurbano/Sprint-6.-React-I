import React from "react";
import data from "./data.json";
import { Caja, Styledbutton } from "./button.js";
import { Boton } from "./button.js";
export default function Text() {
  return (
    <div>
      <Boton>
        <Styledbutton>Anterior</Styledbutton>
        <Styledbutton>Siguiente</Styledbutton>
      </Boton>
      {data.map((frase) => {
        return <Caja key={frase}>{frase}</Caja>;
      })}
    </div>
  );
}
