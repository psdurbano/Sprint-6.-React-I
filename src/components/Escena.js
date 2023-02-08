import { useState } from "react";
import React from "react";
import data from "./data.json";
import { Box, Boton, Coloredbox, Styledbutton } from "./button.js";

export default function Text() {
  const [count, setCount] = useState(0);
  const next = () => {
    if(count <3)
    setCount(count + 1);
  };

  const previous = () => {
    if(count > 0)
    setCount(count - 1);
  };

  return (
    <div>
      <Boton>
        <Styledbutton onClick={previous}>Anterior</Styledbutton>
        <Styledbutton onClick={next}>Siguiente</Styledbutton>
      </Boton>
      {data.map((frase, i) => {
        console.log(i);
        return (
          count === i ? (
            <Coloredbox key={frase}>{frase}</Coloredbox>
          ) : (
            <Box key={frase}>{frase}</Box>
          ));
      })}
    </div>
  );
}
