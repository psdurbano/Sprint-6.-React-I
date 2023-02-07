import { useState } from "react";
import React from "react";
import data from "./data.json";
import { Box, Boton, Coloredbox, Styledbutton } from "./button.js";

export default function Text() {
  const [count, setCount] = useState(0);
  const next = () => {
    setCount(count + 1);
  };

  const previous = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div>
        <Styledbutton onClick={previous}>Anterior</Styledbutton>
        <Styledbutton onClick={next}>Siguiente</Styledbutton>
      </div>
      {data.map((frase, i) => {
        return (
          count === frase[i] ? (
            <Box key={frase}>{frase}</Box>
          ) : (
            <Coloredbox key={frase}>{frase}</Coloredbox>
          ));
      })}
    </div>
  );
}
