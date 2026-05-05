import { useState } from "react";

function App() {
  const defaultColor = "#ffffff";
  const defaultSize = 16;

  const [grid, setGrid] = useState(createGrid);
  const [color, setColor] = useState(defaultColor);
  
   {grid.map((row, r) =>
        row.map((color, c) => (
          <button
            key={`${r}-${c}`}  className="pixel"
            style={{ background: color }} aria-label={`Pixel ${r}, ${c}`}
          />
          ))
      )}




  const createGrid = () => {
    const newGrid = Array.from({ length: defaultSize }, () =>
      Array(defaultSize).fill(defaultColor),
    );

    return newGrid;
  };

  return (
    <>
      <h1>App</h1>
    </>
  );
}

export default App;
