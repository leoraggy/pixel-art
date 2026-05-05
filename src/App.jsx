import { useState } from "react";

function App() {
  const defaultColor = "#ffffff";
  const defaultSize = 16;

  const [grid, setGrid] = useState(createGrid);
  const [color, setColor] = useState(defaultColor);

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
